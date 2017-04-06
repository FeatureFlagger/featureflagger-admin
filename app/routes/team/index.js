import AuthenticatedRoute from 'featureflagger-admin/routes/authenticated';

export default AuthenticatedRoute.extend({
  model() {
    return this.get('store').findAll('user');
  }
});
