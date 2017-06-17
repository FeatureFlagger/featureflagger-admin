import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  userOrder: ['name'],
  inviteOrder: ['email'],

  showInviteUserModal: false,

  sortedActiveUsers: sort('model.activeUsers', 'userOrder'),
  sortedInvites: sort('model.invites', 'inviteOrder'),

  actions: {
    toggleInviteUserModal() {
      this.toggleProperty('showInviteUserModal');
    }
  }
});
