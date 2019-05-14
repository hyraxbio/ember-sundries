import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/confirm-cancel-popout';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['confirm-cancel-container'],
  classNameBindings: ['containerClasses', 'colorScheme'],

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