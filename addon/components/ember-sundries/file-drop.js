import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FileDrop extends Component {
  dragClass = 'deactivated';
  dataTestClass = 'file-drop-zone';

  @action
  onDragLeave(event) {
    event.preventDefault();
    return (this.dragClass = 'deactivated');
  }

  @action
  onDragOver(event) {
    event.preventDefault();
    return (this.dragClass = 'activated');
  }

  @action
  onDrop(event) {
    event.preventDefault();
    var files;
    this.dragClass = 'deactivated';
    files = event.dataTransfer.files;
    if (this.args.disabled) {
      if (this.args.fileDroppedWhenDisabledAction) {
        this.args.fileDroppedWhenDisabledAction();
      }
      return;
    }
    this.args.fileProcessingAction(files, this.args.allowedFileTypesList);
  }
}
