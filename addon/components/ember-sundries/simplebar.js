import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EmberSundriesSimpleBar extends Component {
  @tracked contentWidth;

  get style() {
    return htmlSafe(`width: ${this.contentWidth}px`);
  }

  @action 
  onInsert(element) {
    if (!element) { return; }
    this.contentWidth = element.offsetWidth;
  }
}