import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  showNewFeatureModal: false,

  featuresOrder: ['name'],

  sortedFeatures: sort('model.features', 'featuresOrder'),

  actions: {
    toggleNewFeatureModal() {
      this.toggleProperty('showNewFeatureModal');
    }
  }
});
