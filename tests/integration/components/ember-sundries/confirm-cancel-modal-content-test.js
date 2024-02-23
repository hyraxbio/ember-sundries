import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | ember-sundries/confirm-cancel-modal-content',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<EmberSundries::ConfirmCancelModalContent />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <EmberSundries::ConfirmCancelModalContent>
        template block text
      </EmberSundries::ConfirmCancelModalContent>
    `);

      assert.dom().hasText('template block text');
    });
  }
);
