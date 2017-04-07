import Controller from 'ember-controller';

export default Controller.extend({
  showNewFeatureModal: false,

  actions: {
    toggleNewFeatureModal() {
      this.toggleProperty('showNewFeatureModal');
    }
  }
});
