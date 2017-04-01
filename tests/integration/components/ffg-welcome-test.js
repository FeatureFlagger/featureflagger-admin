import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ffg welcome', function() {
  setupComponentTest('ffg-welcome', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#ffg-welcome}}
    //     template content
    //   {{/ffg-welcome}}
    // `);

    this.render(hbs`{{ffg-welcome}}`);
    expect(this.$()).to.have.length(1);
  });
});
