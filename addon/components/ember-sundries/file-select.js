import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-select';

export default Component.extend({
  tagName: "",
  layout,
  type: 'div',
  dataTestClass: "file-select-button",

  actions: {
    sendFiles: function(files) {
      this.fileProcessingAction(files, this.get('allowedFileTypesList'));
    },
  }
});