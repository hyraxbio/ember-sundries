import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/animated-accordion';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  layout,
  tagName: 'div',
  EmberSundries: service(),
  classNames: ['accordion-item'],
  classNameBindings: ['open:open', 'EmberSundries.accordionItemDefaultClasses', 'openDefaultClasses', 'closedDefaultClasses'],

  parsedTitle: computed('headerLevel', 'title', function() {
    var headerLevel = this.get('headerLevel') || 2;
    return  htmlSafe(`<h${headerLevel} class="margin-0">${this.get('title')}</h${headerLevel}>`);
  }),
  
  expandCollapseIcon: computed("open", function() {
    return this.get("open") ? "svg-repo/icons/icon-arrow-up" : "svg-repo/icons/icon-arrow-down";
  }),

  openDefaultClasses: computed('open', 'EmberSundries.accordionItemOpenDefaultClasses', function() {
    if (!this.get('open')) { return; }
    return this.get('EmberSundries.accordionItemOpenDefaultClasses');
  }),

  closedDefaultClasses: computed('open', 'EmberSundries.accordionItemOpenDefaultClasses', function() {
    if (this.get('open')) { return; }
    return this.get('EmberSundries.accordionItemClosedDefaultClasses');
  }),

  actions: {
    toggleAccordion: function() {
      this.toggleProperty('open');
    },
  }
});