import Ember from 'ember';
import AuthenticatedRoute from 'featureflagger-admin/routes/authenticated';
import styleBody from 'featureflagger-admin/mixins/style-body';

// ember-cli-shims doesn't export canInvoke
const { canInvoke } = Ember;

export default AuthenticatedRoute.extend(styleBody, {
  classNames: ['featureflagger-signout'],

  afterModel(model, transition) {
    if (canInvoke(transition, 'send')) {
      transition.send('invalidateSession');
    } else {
      this.send('invalidateSession');
    }
  }
});
