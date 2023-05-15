import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-sundries/in-page-alert';

export default Component.extend({
  tagName: "",
  layout,
  dataTestClass: 'in-page-alert',

  textClass: computed('type', function() {
    return `text-${this.type}`;
  }),

  fillClass: computed('type', function() {
    return `fill-${this.type}`;
  })
});