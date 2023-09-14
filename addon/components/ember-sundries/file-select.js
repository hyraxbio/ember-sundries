import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FileSelect extends Component {
  type = 'div';
  dataTestClass = 'file-select-button';

  @action
  sendFiles(files) {
    this.args.fileProcessingAction(files, this.args.allowedFileTypesList);
  }
}
