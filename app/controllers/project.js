import Controller from 'ember-controller';
import injectService from 'ember-service/inject';

export default Controller.extend({
  session: injectService()
});
