import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-sundries/in-page-alert';

export default Component.extend({
  layout,
  classNames: ['in-page-alert'],
  classNameBindings: ['type', 'classes', 'textClass'],
  attributeBindings: ['dataTestClass:data-test-class'],
  dataTestClass: 'in-page-alert',

  textClass: computed('type', function() {
    return `text-${this.get('type')}`;
  }),

  fillClass: computed('type', function() {
    return `fill-${this.get('type')}`;
  }),
});