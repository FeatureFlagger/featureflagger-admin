import Controller from 'ember-controller';
import { sort } from 'ember-computed';

export default Controller.extend({
  projectOrder: ['name'],
  inviteOrder: ['email'],

  showNewProjectModal: false,

  sortedProjects: sort('model', 'projectOrder'),

  actions: {
    toggleNewProjectModal() {
      this.toggleProperty('showNewProjectModal');
    }
  }
});
