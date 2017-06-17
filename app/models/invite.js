/* eslint camelcase: [2, {properties: "never"}] */
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  token: attr('string'),
  email: attr('string'),
  expires: attr('number'),
  createdAtUTC: attr('moment-utc'),
  createdBy: attr('number'),
  updatedAtUTC: attr('moment-utc'),
  updatedBy: attr('number'),
  status: attr('string'),
  role: belongsTo('role', { embedded: 'always', async: false })

});
