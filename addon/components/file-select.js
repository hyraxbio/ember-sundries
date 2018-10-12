import Component from '@ember/component';
import layout from '../templates/components/file-select';

export default Component.extend({
  layout,
  type: 'div',
  classNames: ['input-file-wrapper', 'button'],
  classNameBindings: ['classes'],

  actions: {
    sendFiles: function(files) {
      this.fileProcessingAction(files, this.get('allowedFileTypesList'));
    },
  }
});