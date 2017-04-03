import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | ffg welcome', () => {
  setupComponentTest('ffg-welcome', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{ffg-welcome}}`);
    expect(this.$()).to.have.length(1);
  });
});
