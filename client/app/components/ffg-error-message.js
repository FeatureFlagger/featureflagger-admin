import Component from 'ember-component';
import computed, { notEmpty } from 'ember-computed';
import { isEmpty } from 'ember-utils';

export default Component.extend({
  tagName: 'p',
  classNames: ['response'],

  errors: null,
  property: '',

  isVisible: notEmpty('errors'),

  message: computed('errors.[]', 'property', function() {
    const property = this.get('property');
    const errors = this.get('errors');
    const messages = [];
    let index;

    if (!isEmpty(errors) && errors.get(property)) {
      errors.get(property).forEach((error) => {
        messages.push(error);
      });
      index = Math.floor(Math.random() * messages.length);
      return messages[index].message;
    }
  })
});
