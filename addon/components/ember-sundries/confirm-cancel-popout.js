import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/confirm-cancel-popout';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  dataTestClass: 'confirm-cancel-dialogue',

  dataTestName: computed('mainButtonText', function () {
    return (this.mainButtonText || '').replace(/\s+/g, '-').toLowerCase();
  }),

  actions: {
    didInsert() {
      if (this.positionStatic) {
        this.set('renderInPlace', true);
      }
    },

    closePopoutBox: function (dropdown) {
      dropdown.actions.close();
    },

    confirm: function (dropdown) {
      if (this.confirmAction() === 'confirmActionFail') {
        return;
      }
      this.send('closePopoutBox', dropdown);
    },
  },
});
