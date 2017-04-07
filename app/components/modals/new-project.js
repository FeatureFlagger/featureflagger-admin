import injectService from 'ember-service/inject';
import { A as emberA } from 'ember-array/utils';
import ModalComponent from 'featureflagger-admin/components/modals/base';
import ValidationEngine from 'featureflagger-admin/mixins/validation-engine';
import { task } from 'ember-concurrency';

export default ModalComponent.extend(ValidationEngine, {
  classNames: 'modal-content',

  validationType: 'newProject',

  store: injectService(),
  notifications: injectService(),

  willDestroyElement() {
    this._super(...arguments);
    // TODO: this should not be needed, ValidationEngine acts as a
    // singleton and so it's errors and hasValidated state stick around
    this.get('errors').clear();
    this.set('hasValidated', emberA());
  },

  createProject: task(function* () {
    const name = this.get('name');
    const description = this.get('description');
    const notifications = this.get('notifications');
    const notificationText = `Created project! (${name})`;
    let project;

    try {

      yield this.validate();

      project = this.get('store').createRecord('project', {
        name,
        description
      });

      yield project.save();

      // If sending the invitation email fails, the API will still return a status of 201
      // but the invite's status in the response object will be 'invited-pending'.
      if (project.get('status') === 'pending') {
        notifications.showAlert('Project was not created.  Please try resending.', { type: 'error', key: 'project.new.failed' });
      } else {
        notifications.showNotification(notificationText, { type: 'success', key: 'project.new.success' });
      }

      this.send('closeModal');
    } catch(error) {
      // validation will reject and cause this to be called with no error
      if (error) {
        project.deleteRecord();
        notifications.showAPIError(error, { key: 'project.new' });
        this.send('closeModal');
      }
    }
  }).drop(),

  actions: {
    confirm() {
      this.get('createProject').perform();
    }
  }
});
