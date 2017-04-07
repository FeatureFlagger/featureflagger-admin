import Mixin from 'ember-metal/mixin';
import RSVP from 'rsvp';
import { A as emberA, isEmberArray } from 'ember-array/utils';
import DS from 'ember-data';
import Model from 'ember-data/model';

import SigninValidator from 'featureflagger-admin/validators/signin';
import InviteUserValidator from 'featureflagger-admin/validators/invite-user';
import NewProjectValidator from 'featureflagger-admin/validators/new-project';
import NewFeatureValidator from 'featureflagger-admin/validators/new-feature';

import ValidatorExtensions from 'featureflagger-admin/utils/validator-extensions';

const { Errors } = DS;

// our extensions to the validator library
ValidatorExtensions.init();

export default Mixin.create({
  validators: {
    signin: SigninValidator,
    inviteUser: InviteUserValidator,
    newProject: NewProjectValidator,
    newFeature: NewFeatureValidator
  },

  // This adds the Errors object to the validation engine, and shouldn't affect
  // ember-data models because they essentially use the same thing
  errors: null,

  // Store whether a property has been validated yet, so that we know whether or not
  // to show error / success validation for a field
  hasValidated: null,

  init() {
    this._super(...arguments);
    this.set('errors', Errors.create());
    this.set('hasValidated', emberA());
  },

  validate(opts) {
    let model = this;

    opts = opts || {};

    if (opts.model) {
      model = opts.model;
    } else if (this instanceof Model) {
      model = this;
    } else if (this.get('model')) {
      model = this.get('model');
    }

    const type = this.get('validationType') || model.get('validationType');
    const validator = this.get(`validators.${type}`) || model.get(`validators.${type}`);
    const hasValidated = this.get('hasValidated');

    opts.validationType = type;

    return new RSVP.Promise((resolve, reject) => {
      if (!type || !validator) {
        return reject([`The validator specified, "${type}", did not exist!`]);
      }

      if (opts.property) {
        // If property isn't in `hasValidated`, add it to mark that this field can show a validation result
        hasValidated.addObject(opts.property);
        model.get('errors').remove(opts.property);
      } else {
        model.get('errors').clear();
      }

      const passed = validator.check(model, opts.property);

      return (passed) ? resolve() : reject();
    });
  },

  save(options) {
    const { _super } = this;

    options = options || {};
    options.wasSave = true;

    // model.destroyRecord() calls model.save() behind the scenes.
    // in that case, we don't need validation checks or error propagation,
    // because the model itself is being destroyed.
    if (this.get('isDeleted')) {
      return this._super(...arguments);
    }

    // If validation fails, reject with validation errors.
    // If save to the server fails, reject with server response.
    return this.validate(options).then(() => {
      return _super.call(this, options);
    }).catch((result) => {
      // server save failed or validator type doesn't exist
      if (result && !isEmberArray(result)) {
        throw result;
      }

      return RSVP.reject(result);
    });
  },

  actions: {
    validate(property) {
      this.validate({ property });
    }
  }
});
