import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ember-extended-elements', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:ember-extended-elements');
    assert.ok(service);
  });
});

