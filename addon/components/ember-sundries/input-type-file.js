import { isEmpty } from '@ember/utils';
import layout from '../../templates/components/ember-sundries/input-type-file';
import Component from '@ember/component';

export default Component.extend({
  layout,

  actions: {
    wasChanged(e) {
      var input = e.target;
      if (!isEmpty(input.files)) {
        this.send('sendFiles', input.files);
        e.target.closest('.file-select-button').reset();
      }
    },

    sendFiles: function (files) {
      this.sendFiles(files);
    },
  },
});
