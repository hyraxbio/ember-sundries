import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/file-select';

export default Component.extend({
  layout,
  type: 'div',
  classNames: ['input-file-wrapper'],
  classNameBindings: ['disabled:disabled'],
  attributeBindings: ['data-test-class', 'data-test-id'],

  actions: {
    sendFiles: function(files) {
      this.fileProcessingAction(files, this.get('allowedFileTypesList'));
    },
  }
});