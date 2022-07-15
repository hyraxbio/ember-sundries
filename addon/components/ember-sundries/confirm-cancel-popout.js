import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/confirm-cancel-popout';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['confirm-cancel-container'],
  classNameBindings: ['containerClasses', 'colorScheme'],
  'data-test-class': 'confirm-cancel-dialogue',
  // attributeBindings: ['dataTest']
  'data-test-name': computed('mainButtonText', function() {
    return (this.mainButtonText || '').replace(/\s+/g, '-').toLowerCase()
  }),

  didInsertElement() {
    if (this.get('positionStatic')) {
      this.set('renderInPlace', true);
    }
  },

  actions: {
    closePopoutBox: function(dropdown) {
      dropdown.actions.close();
    },

    confirm: function(dropdown) {
      if (this.confirmAction() === 'confirmActionFail') {
        return;
      }
      this.send('closePopoutBox', dropdown);
    },
  }
});