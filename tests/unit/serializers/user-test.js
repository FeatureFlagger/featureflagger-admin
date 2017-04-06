/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit: Serializer: user', function() {
  setupModelTest('user', {
        // Specify the other units that are required for this test.
    needs: [
      'model:role',
      'transform:moment-utc'
    ]
  });

    // Replace this with your real tests.
  it('serializes records', function() {
    const record = this.subject();

    const serializedRecord = record.serialize();

    expect(serializedRecord).to.be.ok;
  });
});
