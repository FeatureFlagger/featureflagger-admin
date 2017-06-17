import Component from 'ember-component';
import computed from 'ember-computed';
import ValidationStateMixin from 'featureflagger-admin/mixins/validation-state';

export default Component.extend(ValidationStateMixin, {
  classNameBindings: ['errorClass'],

  errorClass: computed('property', 'hasError', 'hasValidated.[]', function() {
    const hasValidated = this.get('hasValidated');
    const property = this.get('property');

    if (hasValidated && hasValidated.includes(property)) {
      return this.get('hasError') ? 'error' : 'success';
    } else {
      return '';
    }
  })
});
