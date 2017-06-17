import Component from 'ember-component';
import { alias } from 'ember-computed';
import injectService from 'ember-service/inject';

export default Component.extend({
  tagName: 'aside',
  classNames: 'ffg-notifications',

  notifications: injectService(),

  messages: alias('notifications.notifications')
});
