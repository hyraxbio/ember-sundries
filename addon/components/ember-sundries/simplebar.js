import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EmberSundriesSimpleBar extends Component {
  @tracked contentWidth;

  get style() {
    return {
      width: `${this.contentWidth}px`,
    };
  }

  @action
  onInsert(element) {
    if (!element) {
      return;
    }
    setTimeout(() => {
      // Because sometimes Chromium initially renders inline-flex elements with an extar 40px width.
      this.contentWidth = element.offsetWidth;
    }, 1);
  }
}
