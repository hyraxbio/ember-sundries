import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/truncated-text-with-hover';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  maxChars: 3,
  afterTruncatedText: '...',
  tagName: '',

  truncated: computed('text', 'maxChars', function () {
    if (this.text.split('').length > this.maxChars) {
      return this.text.split('').slice(0, this.maxChars).join('');
    }
    return null;
  }),
});
