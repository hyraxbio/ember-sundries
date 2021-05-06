import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/info-popout';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    prevent() {
      return false;
    },

    open(dropdown) {
      dropdown.actions.open();
    },

    closeLater(dropdown) {
      dropdown.actions.close();
    }
  }
});