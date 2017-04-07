import AuthenticatedRoute from 'featureflagger-admin/routes/authenticated';

export default AuthenticatedRoute.extend({

  model(params) {
    return this.store.queryRecord('project', { name: params.project_slug });
  }
});
