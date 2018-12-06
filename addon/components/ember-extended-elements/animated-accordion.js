import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/animated-accordion';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['accordion-item'],
  classNameBindings: ['classes', 'open:open'],

  expandCollapseIcon: computed("open", function() {
    return this.get("open") ? "svg-repo/icons/icon-arrow-up" : "svg-repo/icons/icon-arrow-down";
  }),

  actions: {
    toggleAccordion: function() {
      this.toggleProperty("open");
    },
  }
});