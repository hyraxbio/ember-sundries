import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | ember-sundries/is-in-array', function (hooks) {
  setupRenderingTest(hooks);

  test('Full usage', async function (assert) {
    await render(hbs`{{ember-sundries/is-in-array}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'No fatal error if first argument is missing.'
    );
    await render(hbs`{{ember-sundries/is-in-array "test"}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'No fatal error if second argument is missing.'
    );

    await render(hbs`{{ember-sundries/is-in-array "test" "string"}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'No fatal error if second argument is no at array.'
    );

    await render(
      hbs`{{ember-sundries/is-in-array "one" (array "one" "two" "three")}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'true',
      'Prints true when item is in the array.'
    );

    await render(
      hbs`{{ember-sundries/is-in-array "one" (array "two" "three" "four")}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'false',
      'Prints false when item is not in the array.'
    );

    await render(hbs`
    {{#if (ember-sundries/is-in-array "one" (array "one" "two" "three"))}}
      Present
    {{/if}}`);
    assert.equal(
      this.element.textContent.trim(),
      'Present',
      'Returns true used in IF block, and item is not in the array.'
    );

    await render(hbs`
    {{#if (ember-sundries/is-in-array "one" (array "two" "three" "four"))}}
      Present
    {{/if}}`);
    assert.equal(
      this.element.textContent.trim(),
      '',
      'Returns true used in IF block, and item is not in the array.'
    );
  });
});
