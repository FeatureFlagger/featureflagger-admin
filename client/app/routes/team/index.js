import AuthenticatedRoute from 'featureflagger-admin/routes/authenticated';
import RSVP from 'rsvp';

export default AuthenticatedRoute.extend({
  model() {
    const modelPromises = {
      activeUsers: this.get('store').findAll('user'),
      invites: this.get('store').findAll('invite')
    };
    return RSVP.hash(modelPromises);
  }
});
