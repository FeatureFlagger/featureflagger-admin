import BaseValidator from './base';

export default BaseValidator.create({
  properties: ['name', 'description', 'keyName'],

  name(model) {
    const name = model.get('name');

    if (validator.empty(name)) {
      model.get('errors').add('name', 'Please enter an feature name.');
      this.invalidate();
    }
  },
  description(model) {
    const description = model.get('description');

    if (validator.empty(description)) {
      model.get('errors').add('description', 'Please enter a description');
      this.invalidate();
    }
  },
  keyName(model) {
    const keyName = model.get('keyName');

    if (validator.empty(keyName)) {
      model.get('errors').add('keyName', 'Please enter an feature key name.');
      this.invalidate();
    }
  }
});
