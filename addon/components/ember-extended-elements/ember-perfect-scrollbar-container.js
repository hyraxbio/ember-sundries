import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/ember-perfect-scrollbar-container';
import { PerfectScrollbarMixin } from 'ember-perfect-scrollbar';

export default Component.extend(PerfectScrollbarMixin, {
  layout,
  classNameBindings: ['customClasses'],

  init: function() {
    this._super(...arguments);
    this.perfectScrollbarOptions = {
      suppressScrollX: true,
      maxScrollbarLength: 200,
      minScrollbarLength: 40,
      wheelPropagation: true,
      swipePropagation: true,
    };
  }
});