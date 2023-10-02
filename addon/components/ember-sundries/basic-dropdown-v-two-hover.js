import { action } from '@ember/object';
import Component from '@glimmer/component';
import { cancel, later } from '@ember/runloop';

export default class BasicDropdownVTwoHover extends Component {
  delay = this.args.delay || 300;

  get openDelay() {
    return this.delay;
  }

  get closeDela() {
    return this.delay;
  }

  @action
  open(dropdown) {
    if (this.closeTimer) {
      cancel(this.closeTimer);
      this.closeTimer = null;
    } else {
      let openFn = () => {
        this.openTimer = null;
        dropdown.actions.open();
      };
      let openDelay = this.openDelay;
      if (openDelay) {
        this.openTimer = later(openFn, openDelay);
      } else {
        openFn();
      }
    }
  }

  @action
  close(dropdown) {
    if (this.openTimer) {
      cancel(this.openTimer);
      this.openTimer = null;
    } else {
      let closeFn = () => {
        this.closeTimer = null;
        dropdown.actions.close();
      };
      let closeDelay = this.closeDelay;
      if (closeDelay) {
        this.closeTimer = later(closeFn, closeDelay);
      } else {
        closeFn();
      }
    }
  }

  @action
  prevent(e) {
    return e.stopImmediatePropagation();
  }
}
