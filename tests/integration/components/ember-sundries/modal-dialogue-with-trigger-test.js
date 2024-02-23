import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | ember-sundries/modal-dialogue-with-trigger',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<EmberSundries::ModalDialogueWithTrigger />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <EmberSundries::ModalDialogueWithTrigger>
        template block text
      </EmberSundries::ModalDialogueWithTrigger>
    `);

      assert.dom().hasText('template block text');
    });
  }
);
