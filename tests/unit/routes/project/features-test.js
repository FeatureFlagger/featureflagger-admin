import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | project | features', function() {
  setupTest('route:project/features', {
    // Specify the other units that are required for this test.
    needs: [
      'service:session'
    ]
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
