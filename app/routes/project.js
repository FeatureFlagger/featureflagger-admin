import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'FeatureFlagger'
      },
      {
        name: 'Livrio'
      },
      {
        name: 'Pratiki'
      }
    ];
  }
});
