import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class LabelledCheckbox extends Component {
  @action
  checkboxClicked(event) {
    if (this.args.changedAction) {
      this.args.changedAction(event.target.checked, event);
    }
  }
}
