import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-drop';

export default Component.extend({
  tagName: "",
  layout,
  dragClass: 'deactivated',
  dataTestClass: 'file-drop-zone',

  actions: {
    onDragLeave: function(event) {
      event.preventDefault();
      return this.set('dragClass', 'deactivated');
    },

    onDragOver: function(event) {
      event.preventDefault();
      return this.set('dragClass', 'activated');
    },

    onDrop: function(event) {
      event.preventDefault();
      var files;
      this.set('dragClass', 'deactivated');
      files = event.dataTransfer.files;
      if (this.get('disabled')) { 
        if (this.get('fileDroppedWhenDisabledAction')) {
          this.fileDroppedWhenDisabledAction();
        }
        return; 
      }
      this.fileProcessingAction(files, this.get('allowedFileTypesList'));
    }
  }
});