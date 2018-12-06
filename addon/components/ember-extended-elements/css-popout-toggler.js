import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/css-popout-toggler';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['toggle-button'],
  classNameBindings: ['classes', 'popoutBoxName:open:closed'],
  click() {
    this.toggleProperty('popoutBoxName');
  },
});