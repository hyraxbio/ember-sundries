import { action } from '@ember/object';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class LabelledCheckbox extends Component {
  _uid = guidFor(this);

  get commonId() {
    return this.args.elementId || this._uid;
  }

  get hasLabel() {
    return this.args.label || this.args.labelComponent;
  }

  @action
  checkboxClicked(event) {
    if (this.args.changedAction) {
      this.args.changedAction(event.target.checked, event);
    }
  }
}
