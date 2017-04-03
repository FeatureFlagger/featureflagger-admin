import Authenticated from 'featureflagger-admin/routes/authenticated';

export default Authenticated.extend({
  model() {
    return this.store.findAll('project');
  }
});
