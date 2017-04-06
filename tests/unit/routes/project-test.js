import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | project', function() {
  setupTest('route:project', {
    needs: [
      'service:session'
    ]
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
