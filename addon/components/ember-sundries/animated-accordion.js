import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/animated-accordion';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  layout,
  tagName: "",
  emberSundries: service(),

  parsedTitle: computed('headerLevel', 'title', function() {
    var headerLevel = this.headerLevel || 2;
    return  htmlSafe(`<h${headerLevel} class="margin-0">${this.title}</h${headerLevel}>`);
  }),

  expandCollapseIcon: computed("open", function() {
    return this.open ? "svg-repo/icons/icon-arrow-up" : "svg-repo/icons/icon-arrow-down";
  }),

  openDefaultClasses: computed('EmberSundries.accordionItemOpenDefaultClasses', 'emberSundries.accordionItemOpenDefaultClasses', 'open', function() {
    if (!this.open) { return; }
    return this.emberSundries.accordionItemOpenDefaultClasses;
  }),

  closedDefaultClasses: computed('EmberSundries.accordionItemOpenDefaultClasses', 'emberSundries.accordionItemClosedDefaultClasses', 'open', function() {
    if (this.open) { return; }
    return this.emberSundries.accordionItemClosedDefaultClasses;
  }),

  actions: {
    toggleAccordion: function() {
      this.toggleProperty('open');
    },
  }
});