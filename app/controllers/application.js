import Controller from 'ember-controller';
import computed from 'ember-computed';
import injectService from 'ember-service/inject';

export default Controller.extend({
  session: injectService(),

  showNavMenu: computed('currentPath', 'session.isAuthenticated', function() {
    if (!this.get('session.isAuthenticated')) {
      return false;
    }

    return (this.get('currentPath') !== 'error404' || this.get('session.isAuthenticated'))
            && !this.get('currentPath').match(/(signin)/);
  })
});
