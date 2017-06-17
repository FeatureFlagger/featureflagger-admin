import Component from 'ember-component';
import injectService from 'ember-service/inject';

export default Component.extend({
  tagName: 'nav',
  classNames: ['ffg-nav'],

  session: injectService()
});
