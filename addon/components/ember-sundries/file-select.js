import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-select';

@tagName('')
@templateLayout(layout)
export default class FileSelect extends Component {
  type = 'div';
  dataTestClass = 'file-select-button';

  @action
  sendFiles(files) {
    this.fileProcessingAction(files, this.allowedFileTypesList);
  }
}
