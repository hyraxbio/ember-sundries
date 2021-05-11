import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | ember-sundries/string-replace', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('No args', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{ember-sundries/string-replace}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('Only string', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{ember-sundries/string-replace inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

  test('Find but no replace', async function(assert) {
    this.set('inputValue', '12-34');

    await render(hbs`{{ember-sundries/string-replace inputValue find="-"}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

  test('Replaces only first instance without flag "g"', async function(assert) {
    this.set('inputValue', '12-34-56');

    await render(hbs`{{ember-sundries/string-replace inputValue find="-" replace="*"}}`);

    assert.equal(this.element.textContent.trim(), '12*34-56');
  });

  test('Replaces globally with flag "g"', async function(assert) {
    this.set('inputValue', '12-34-56');

    await render(hbs`{{ember-sundries/string-replace inputValue find="-" replace="*" flags="g"}}`);

    assert.equal(this.element.textContent.trim(), '12*34*56');
  });

  test('Case insensitive with flag "i"', async function(assert) {
    this.set('inputValue', 'Foo');

    await render(hbs`{{ember-sundries/string-replace inputValue find="f" replace="*" flags="i"}}`);

    assert.equal(this.element.textContent.trim(), '*oo');
  });

  test('Case sensitive without flag "i"', async function(assert) {
    this.set('inputValue', 'Foo');

    await render(hbs`{{ember-sundries/string-replace inputValue find="f" replace="*"}}`);

    assert.equal(this.element.textContent.trim(), 'Foo');
  });

  test('With flags "gi"', async function(assert) {
    this.set('inputValue', 'FoofooFoo');

    await render(hbs`{{ember-sundries/string-replace inputValue find="f" replace="*" flags="gi" }}`);

    assert.equal(this.element.textContent.trim(), '*oo*oo*oo');
  });


});
