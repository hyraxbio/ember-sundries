import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/markdown-file-to-html';
import fetch from 'fetch';
export default Component.extend({
  layout,
  
  didInsertElement() {
    fetch(this.get('filePath')).then(response => {
      response.text().then(result => {
        this.set('markdown', result);
      });
    });
  }
});