import Route from 'ember-route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import injectService from 'ember-service/inject';

export default Route.extend(ApplicationRouteMixin, {
  session: injectService(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
