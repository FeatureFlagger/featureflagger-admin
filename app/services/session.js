import computed from 'ember-computed';
import injectService from 'ember-service/inject';
import SessionService from 'ember-simple-auth/services/session';

export default SessionService.extend({
  store: injectService(),

  user: computed(function() {
    const userId = this.get('data.authenticated.userId') || 'me';
    return this.get('store').find('user', userId);
  })
});
