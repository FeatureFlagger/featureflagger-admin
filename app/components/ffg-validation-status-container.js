import Component from 'ember-component';
import computed from 'ember-computed';
import ValidationStateMixin from 'featureflagger-admin/mixins/validation-state';

export default Component.extend(ValidationStateMixin, {
  classNameBindings: ['errorClass'],

  errorClass: computed('property', 'hasError', 'hasValidated.[]', function() {
    let hasValidated = this.get('hasValidated');
    let property = this.get('property');

    if (hasValidated && hasValidated.includes(property)) {
      return this.get('hasError') ? 'error' : 'success';
    } else {
      return '';
    }
  })
});
