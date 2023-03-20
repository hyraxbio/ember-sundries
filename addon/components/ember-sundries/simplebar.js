import SimpleBar from 'ember-simplebar/components/simple-bar';
import layout from '../../templates/components/ember-sundries/simplebar';
import { computed } from '@ember/object';

export default SimpleBar.extend({
  layout,
  attributeBindings: ['style:style'],

  didReceiveAttrs() {
    if (!this.element) { return; }
    this.set('contentWidth', this.element.querySelector('.ember-simplebar-dummy').offsetWidth);
  },

  style: computed('contentWidth', function() {
    return `width: ${this.contentWidth}px`.htmlSafe();
  }),
})