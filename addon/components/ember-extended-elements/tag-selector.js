import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/tag-selector';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['tag-selector'],
  actions: {
    handleKeydown(dropdown, e) {
      if (e.keyCode !== 13 || !this.onPressEnter) { return; }
      this.onPressEnter(e.target.value, dropdown);
    }
  }
});
