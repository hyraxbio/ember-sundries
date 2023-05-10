import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/basic-dropdown-popout';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: "",

  positionClass: computed("positionStatic", function() {
    return this.get("positionStatic") ? "position-static" : "";
  }),

  actions: {
    closePopoutBox: function(dropdown) {
      dropdown.actions.close();
    },
  }
});