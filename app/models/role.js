/* eslint-disable camelcase */
import computed from 'ember-computed';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),

  lowerCaseName: computed('name', function() {
    return this.get('name').toLocaleLowerCase();
  })
});
