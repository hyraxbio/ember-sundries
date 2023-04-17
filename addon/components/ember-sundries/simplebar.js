import SimpleBarComponent from 'ember-simplebar/components/simple-bar';
import { htmlSafe } from '@ember/template';

export default class SimpleBar extends SimpleBarComponent {
  // Ocaten todo how to implement this?
  // didReceiveAttrs() {
  //   if (!this.element) { return; }
  //   this.set('contentWidth', this.element.querySelector('.ember-simplebar-dummy').offsetWidth);
  // }

  get style() {
    return htmlSafe(`width: ${this.contentWidth}px`);
  }
}