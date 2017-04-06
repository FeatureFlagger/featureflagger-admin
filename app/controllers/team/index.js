import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  userOrder: ['name'],
  showInviteUserModal: false,

  sortedActiveUsers: sort('model', 'userOrder'),

  actions: {
    toggleInviteUserModal() {
      this.toggleProperty('showInviteUserModal');
    }
  }
});
