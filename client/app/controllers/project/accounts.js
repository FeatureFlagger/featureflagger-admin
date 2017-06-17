import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  showNewAccountModal: false,

  accountsOrder: ['name'],

  sortedAccounts: sort('model.accounts', 'accountsOrder'),

  actions: {
    toggleNewAccountModal() {
      this.toggleProperty('showNewAccountModal');
    }
  }
});
