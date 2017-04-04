import EmberObject from 'ember-object';
import DS from 'ember-data';
import Unauthenticated from 'featureflagger-admin/routes/unauthenticated';

const { Errors } = DS;

export default Unauthenticated.extend({
  model() {
    return EmberObject.create({
      identification: '',
      password: '',
      errors: Errors.create()
    });
  }
});
