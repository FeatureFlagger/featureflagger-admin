import computed from 'ember-computed';
import FFgInput from 'featureflagger-admin/components/ffg-input';

const TrimFocusInputComponent = FFgInput.extend({

  shouldFocus: true,

  attributeBindings: ['autofocus'],

  autofocus: computed(function() {
    if (this.get('shouldFocus')) {
      return 'autofocus';
    }

    return false;
  }),

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    this._super(...arguments);
    this._focus();
  },

  focusOut(event) {
    this._trimInput(event.target.value);
  },

  _trimInput(value) {
    if (value && typeof value.trim === 'function') {
      value = value.trim();
    }

    this._processNewValue(value);
  },

  _focus() {
    // Until mobile safari has better support
    // for focusing, we just ignore it
    if (this.get('shouldFocus')) {
      this.element.focus();
    }
  }
});

export default TrimFocusInputComponent;
