import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | project', () => {
  setupModelTest('project', {
    needs: [
      'model:feature',
      'model:account'
    ]
  });

  it('exists', function() {
    expect(this.subject()).to.be.ok;
  });
});
