/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit: Component: ffg-user-active', function() {
  setupComponentTest('ffg-user-active', {
    unit: true
  });

  it('renders', function() {
        // creates the component instance
    const component = this.subject();

    expect(component._state).to.equal('preRender');

        // renders the component on the page
    this.render();
    expect(component._state).to.equal('inDOM');
  });
});
