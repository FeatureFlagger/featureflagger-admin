import Component from 'ember-component';
import injectService from 'ember-service/inject';
import computed from 'ember-computed';

export default Component.extend({
  tagName: 'article',
  classNames: ['ffg-notification', 'ffg-notification-passive'],
  classNameBindings: ['typeClass'],

  message: null,

  notifications: injectService(),

  typeClass: computed('message.type', function() {
    const type = this.get('message.type');
    let classes = '';

    const typeMapping = {
      success: 'green',
      error: 'red',
      warn: 'yellow'
    };

    if (typeMapping[type] !== undefined) {
      classes += `ffg-notification-${typeMapping[type]}`;
    }

    return classes;
  }),

  didInsertElement() {
    this._super(...arguments);

    this.$().on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', (event) => {
      if (event.originalEvent.animationName === 'fade-out') {
        this.get('notifications').closeNotification(this.get('message'));
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$().off('animationend webkitAnimationEnd oanimationend MSAnimationEnd');
  },

  actions: {
    closeNotification() {
      this.get('notifications').closeNotification(this.get('message'));
    }
  }
});
