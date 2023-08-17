import { action } from '@ember/object';
import { layout as templateLayout } from '@ember-decorators/component';
import { isEmpty } from '@ember/utils';
import layout from '../../templates/components/ember-sundries/input-type-file';
import Component from '@ember/component';

@templateLayout(layout)
export default class InputTypeFile extends Component {
  @action
  wasChanged(e) {
    var input = e.target;
    if (!isEmpty(input.files)) {
      this.sendFiles(input.files);
      e.target.closest('.file-select-button').reset();
    }
  }
}
