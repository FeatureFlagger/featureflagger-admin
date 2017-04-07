import injectService from 'ember-service/inject';
import { A as emberA } from 'ember-array/utils';
import ModalComponent from 'featureflagger-admin/components/modals/base';
import ValidationEngine from 'featureflagger-admin/mixins/validation-engine';
import { task } from 'ember-concurrency';

export default ModalComponent.extend(ValidationEngine, {
  classNames: 'modal-content',

  validationType: 'newFeature',

  store: injectService(),
  notifications: injectService(),

  willDestroyElement() {
    this._super(...arguments);
    // TODO: this should not be needed, ValidationEngine acts as a
    // singleton and so it's errors and hasValidated state stick around
    this.get('errors').clear();
    this.set('hasValidated', emberA());
  },

  createFeature: task(function* () {
    const name = this.get('name');
    const description = this.get('description');
    const key = this.get('key');
    const notifications = this.get('notifications');
    const notificationText = `Created feature! (${name})`;
    let feature;

    try {

      yield this.validate();

      feature = this.get('store').createRecord('feature', {
        name,
        description,
        key
      });

      yield feature.save();

      // If sending the invitation email fails, the API will still return a status of 201
      // but the invite's status in the response object will be 'invited-pending'.
      if (feature.get('status') === 'pending') {
        notifications.showAlert('Feature was not created.  Please try resending.', { type: 'error', key: 'feature.new.failed' });
      } else {
        notifications.showNotification(notificationText, { type: 'success', key: 'feature.new.success' });
      }

      this.send('closeModal');
    } catch(error) {
      // validation will reject and cause this to be called with no error
      if (error) {
        feature.deleteRecord();
        notifications.showAPIError(error, { key: 'feature.new' });
        this.send('closeModal');
      }
    }
  }).drop(),

  actions: {
    confirm() {
      this.get('createFeature').perform();
    }
  }
});
