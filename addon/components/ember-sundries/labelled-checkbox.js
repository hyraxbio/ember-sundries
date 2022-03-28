import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/labelled-checkbox';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["labelled-checkbox"],
  classNameBindings: ["disabled:disabled"],
  
  actions: {
    checkboxClicked: function(event) {
      if (this.changedAction) {
        this.changedAction(event.target.value, event);
      }
    }
  }
});