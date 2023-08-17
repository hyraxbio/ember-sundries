import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-drop';

@tagName('')
@templateLayout(layout)
export default class FileDrop extends Component {
  dragClass = 'deactivated';
  dataTestClass = 'file-drop-zone';

  @action
  onDragLeave(event) {
    event.preventDefault();
    return this.set('dragClass', 'deactivated');
  }

  @action
  onDragOver(event) {
    event.preventDefault();
    return this.set('dragClass', 'activated');
  }

  @action
  onDrop(event) {
    event.preventDefault();
    var files;
    this.set('dragClass', 'deactivated');
    files = event.dataTransfer.files;
    if (this.disabled) {
      if (this.fileDroppedWhenDisabledAction) {
        this.fileDroppedWhenDisabledAction();
      }
      return;
    }
    this.fileProcessingAction(files, this.allowedFileTypesList);
  }
}
