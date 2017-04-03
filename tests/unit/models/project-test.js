import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | project', () => {
  setupModelTest('project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  // Replace this with your real tests.
  it('exists', function() {
    expect(this.subject()).to.be.ok;
  });
});
