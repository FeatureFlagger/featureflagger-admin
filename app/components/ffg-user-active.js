import Ember from 'ember';
import Component from 'ember-component';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';

// ember-cli-shims doesn't export these
const { Handlebars } = Ember;

export default Component.extend({
  tagName: '',

  user: null,

  userDefault: computed(function() {
    return '/assets/img/user-image.png';
  }),

  userImageBackground: computed('user.image', 'userDefault', function() {
    const url = this.get('user.image') || this.get('userDefault');
    const safeUrl = Handlebars.Utils.escapeExpression(url);

    return htmlSafe(`background-image: url(${safeUrl})`);
  }),

  lastLoginUTC: computed('user.lastLogin', function() {
    const lastLoginUTC = this.get('user.lastLogin');

    return lastLoginUTC ? moment(lastLoginUTC).fromNow() : '(Never)';
  })
});
