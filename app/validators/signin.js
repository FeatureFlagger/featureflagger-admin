import BaseValidator from './base';

export default BaseValidator.create({
  properties: ['identification', 'signin'],
  invalidMessage: 'Email address is not valid',

  identification(model) {
    const id = model.get('identification');

    if (!validator.empty(id) && !validator.isEmail(id)) {
      model.get('errors').add('identification', this.get('invalidMessage'));
      this.invalidate();
    }
  },

  signin(model) {
    const id = model.get('identification');
    const password = model.get('password');

    model.get('errors').clear();

    if (validator.empty(id)) {
      model.get('errors').add('identification', 'Please enter an email');
      this.invalidate();
    }

    if (!validator.empty(id) && !validator.isEmail(id)) {
      model.get('errors').add('identification', this.get('invalidMessage'));
      this.invalidate();
    }

    if (validator.empty(password)) {
      model.get('errors').add('password', 'Please enter a password');
      this.invalidate();
    }
  }
});
