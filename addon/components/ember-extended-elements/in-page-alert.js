import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/in-page-alert';

export default Component.extend({
  layout,
  classNames: ['in-page-alert'],
  classNameBindings: ['type', 'classes'],
});