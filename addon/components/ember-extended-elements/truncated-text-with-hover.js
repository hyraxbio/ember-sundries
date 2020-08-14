import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/truncated-text-with-hover';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  maxChars: 3,
  afterTruncatedText: '...',

  truncated: computed('text', 'maxChars', function() {
    if (this.get('text').split('').length > this.get('maxChars')) {
      return this.get('text').split('').slice(0, this.get('maxChars')).join('');
    }
    return null;
  })
});
