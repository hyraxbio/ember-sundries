import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/markdown-file-to-html';

export default Component.extend({
  layout,
  'data-test-component': 'markdown-content',
  
  didInsertElement() {
    fetch(this.get('filePath')).then(response => {
      response.text().then(result => {
        this.set('markdown', result);
      });
    });
  }
});