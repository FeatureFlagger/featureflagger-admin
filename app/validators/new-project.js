import BaseValidator from './base';

export default BaseValidator.create({
  properties: ['name'],

  name(model) {
    const name = model.get('name');

    if (validator.empty(name)) {
      model.get('errors').add('name', 'Please enter an project name.');
      this.invalidate();
    }
  }
});
