import Component from 'ember-component';
import { invokeAction } from 'ember-invoke-action';

export default Component.extend({
  tagName: 'section',
  classNames: 'modal-content',

  actions: {
    confirm() {
      throw new Error('You must override the "confirm" action in your modal component');
    },

    closeModal() {
      invokeAction(this, 'closeModal');
    }
  }
});
