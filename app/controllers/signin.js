import $ from 'jquery';
import Controller from 'ember-controller';
import injectService from 'ember-service/inject';
import { task } from 'ember-concurrency';
// import { isVersionMismatchError } from 'ghost-admin/services/ajax';
import ValidationEngine from 'featureflagger-admin/mixins/validation-engine';

export default Controller.extend(ValidationEngine, {
  submitting: false,
  loggingIn: false,
  authProperties: ['identification', 'password'],

  // notifications: injectService(),
  session: injectService(),

  flowErrors: '',

  // ValidationEngine settings
  validationType: 'signin',

  authenticate: task(function* (authStrategy, authentication) {
    try {
      const authResult = yield this.get('session')
          .authenticate(authStrategy, ...authentication);

      return authResult;

    } catch(error) {
      if (error && error.errors) {
        // we don't get back an ember-data/ember-ajax error object
        // back so we need to pass in a null status in order to
        // test against the payload
        // if (isVersionMismatchError(error)) {
        //   return this.get('notifications').showAPIError(error);
        // }

        error.errors.forEach((err) => {
          err.message = err.message.htmlSafe();
        });

        this.set('flowErrors', error.errors[0].message.string);

        if (error.errors[0].message.string.match(/Invalid Password/)) {
          this.get('model.errors').add('password', '');
        }
      }
    }
  }).drop(),

  validateAndAuthenticate: task(function* () {
    const model = this.get('model');
    const authStrategy = 'authenticator:oauth2';

    this.set('flowErrors', '');
    // Manually trigger events for input fields, ensuring legacy compatibility with
    // browsers and password managers that don't send proper events on autofill
    $('#login').find('input').trigger('change');

    // This is a bit dirty, but there's no other way to ensure the properties are set as well as 'signin'
    this.get('hasValidated').addObjects(this.authProperties);

    try {
      yield this.validate({ property: 'signin' });
      return yield this.get('authenticate')
          .perform(authStrategy, [model.get('identification'), model.get('password')]);

    } catch(error) {
      this.set('flowErrors', 'Please fill out the form to sign in.');
    }
  }).drop()
});
