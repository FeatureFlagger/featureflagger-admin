import EmberObject from 'ember-object';
import DS from 'ember-data';
import UnauthenticatedRoute from 'featureflagger-admin/routes/unauthenticated';

const { Errors } = DS;

export default UnauthenticatedRoute.extend({
  model() {
    return EmberObject.create({
      identification: '',
      password: '',
      errors: Errors.create()
    });
  }
});
