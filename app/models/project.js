import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  count: attr('raw'),
  features: hasMany('feature', {
    async: true
  }),
  accounts: hasMany('account', {
    async: true
  })
});
