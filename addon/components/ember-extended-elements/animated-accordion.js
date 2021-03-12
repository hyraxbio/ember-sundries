import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/animated-accordion';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  layout,
  tagName: 'div',
  emberExtendedElements: service(),
  classNames: ['accordion-item'],
  classNameBindings: ['open:open', 'emberExtendedElements.accordionItemDefaultClasses', 'openDefaultClasses', 'closedDefaultClasses'],

  parsedTitle: computed('headerLevel', 'title', function() {
    var headerLevel = this.get('headerLevel') || 2;
    return  htmlSafe(`<h${headerLevel} class="margin-0">${this.get('title')}</h${headerLevel}>`);
  }),
  
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