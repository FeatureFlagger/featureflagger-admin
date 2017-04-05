import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  userOrder: ['name'],

  sortedActiveUsers: sort('model', 'userOrder')
});
