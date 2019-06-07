import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/labelled-radio-button';

export default Component.extend({
  layout,
  tagName: "div",
  classNames: ["labelled-radio-button"],
  classNameBindings: ["disabled:disabled"],
  attributeBindings: ['dataTestId:data-test-id']
});
