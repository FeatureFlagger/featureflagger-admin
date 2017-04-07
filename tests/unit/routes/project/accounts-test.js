import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | project | accounts', function() {
  setupTest('route:project/accounts', {
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
