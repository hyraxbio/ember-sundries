import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/markdown-file-to-html';
import fetch from 'fetch';

export default Component.extend({
  tagName: '',
  layout,
  dataTestComponent: 'markdown-content',

  actions: {
    didInsert() {
      fetch(this.filePath).then((response) => {
        response.text().then((result) => {
          this.set('markdown', result);
        });
      });
    },
  },
});
