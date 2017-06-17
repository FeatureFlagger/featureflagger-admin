/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration: Component: ffg-notification', function() {
  setupComponentTest('ffg-notification', {
    integration: true
  });

  it('renders', function() {
    this.set('message', { message: 'Test message', type: 'success' });

    this.render(hbs`{{ffg-notification message=message}}`);

    expect(this.$('article.ffg-notification')).to.have.length(1);
    const $notification = this.$('.ffg-notification');

    expect($notification.hasClass('ffg-notification-passive')).to.be.true;
    expect($notification.text()).to.match(/Test message/);
  });

  it('maps message types to CSS classes', function() {
    this.set('message', { message: 'Test message', type: 'success' });

    this.render(hbs`{{ffg-notification message=message}}`);
    const $notification = this.$('.ffg-notification');

    this.set('message.type', 'success');
    expect($notification.hasClass('ffg-notification-green'), 'success class isn\'t green').to.be.true;

    this.set('message.type', 'error');
    expect($notification.hasClass('ffg-notification-red'), 'success class isn\'t red').to.be.true;

    this.set('message.type', 'warn');
    expect($notification.hasClass('ffg-notification-yellow'), 'success class isn\'t yellow').to.be.true;
  });
});
