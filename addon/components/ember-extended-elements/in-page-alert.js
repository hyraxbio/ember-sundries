import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-extended-elements/in-page-alert';

export default Component.extend({
  layout,
  classNames: ['in-page-alert'],
  classNameBindings: ['type', 'classes', 'textClass'],
  'data-test-class': 'in-page-alert',

  textClass: computed('type', function() {
    return `text-${this.get('type')}`;
  }),

  fillClass: computed('type', function() {
    return `fill-${this.get('type')}`;
  }),
});