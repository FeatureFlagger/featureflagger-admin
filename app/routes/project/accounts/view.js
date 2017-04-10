import AuthenticatedRoute from 'featureflagger-admin/routes/authenticated';

export default AuthenticatedRoute.extend({
  model(params) {
    return this.store.findRecord('account', params.account_id);
  }
});
