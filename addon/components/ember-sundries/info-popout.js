import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/info-popout';
import { later, cancel } from '@ember/runloop';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    prevent() {
      return false;
    },

    open(dropdown) {
      if (this.closeTimer) {
        cancel(this.closeTimer);
        this.closeTimer = null;
      } else {
        dropdown.actions.open();
      }
    },

    closeLater(dropdown) {
      this.closeTimer = later(() => {
        this.closeTimer = null;
        dropdown.actions.close();
      }, 200);
    },
  },
});
