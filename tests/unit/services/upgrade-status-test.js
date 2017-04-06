/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit: Service: upgrade-status', function() {
  setupTest('service:upgrade-status', {
        // Specify the other units that are required for this test.
        // needs: ['service:foo']
    needs: ['service:notifications']
  });

    // Replace this with your real tests.
  it('exists', function() {
    const service = this.subject();
    expect(service).to.be.ok;
  });
});
