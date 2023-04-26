import { isEmpty } from '@ember/utils';
import layout from '../../templates/components/ember-sundries/input-type-file';
import TextField from '@ember/component/text-field';

export default TextField.extend({
  layout,
  type: 'file',

  change: function(e) {
    var input = e.target;
    if (!isEmpty(input.files)) {
      this.send('sendFiles', input.files);
      e.target.closest('.file-select-button').reset();
    }
  },

  actions: {
    sendFiles: function(files) {
      this.sendFiles(files);
    },
  }
});