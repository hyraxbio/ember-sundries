import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/labelled-checkbox';

@templateLayout(layout)
@tagName('')
export default class LabelledCheckbox extends Component {
  @action
  checkboxClicked(event) {
    if (this.changedAction) {
      this.changedAction(event.target.checked, event);
    }
  }
}
