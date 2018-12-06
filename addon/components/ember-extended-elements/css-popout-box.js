import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/css-popout-box';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['pop-up-box'],
  classNameBindings: ['popoutBoxName:open:closed'],

  actions: {
    closePopoutBox: function() {
      this.set('popoutBoxName', false);
    },
  }
});