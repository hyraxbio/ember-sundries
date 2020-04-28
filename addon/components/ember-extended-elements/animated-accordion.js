import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/animated-accordion';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  tagName: 'div',
  emberExtendedElements: service(),
  classNames: ['accordion-item'],
  classNameBindings: ['open:open', 'emberExtendedElements.accordionItemDefaultClasses', 'openDefaultClasses', 'closedDefaultClasses'],
  
  expandCollapseIcon: computed("open", function() {
    return this.get("open") ? "svg-repo/icons/icon-arrow-up" : "svg-repo/icons/icon-arrow-down";
  }),

  openDefaultClasses: computed('open', 'emberExtendedElements.accordionItemOpenDefaultClasses', function() {
    if (!this.get('open')) { return; }
    return this.get('emberExtendedElements.accordionItemOpenDefaultClasses');
  }),

  closedDefaultClasses: computed('open', 'emberExtendedElements.accordionItemOpenDefaultClasses', function() {
    if (this.get('open')) { return; }
    return this.get('emberExtendedElements.accordionItemClosedDefaultClasses');
  }),

  actions: {
    toggleAccordion: function() {
      this.toggleProperty('open');
    },
  }
});