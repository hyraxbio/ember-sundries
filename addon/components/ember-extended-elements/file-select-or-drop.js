import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/file-select-or-drop';

export default Component.extend({
  layout,
  attributeBindings: ['data-test-class', 'data-test-id'],
});
