import { action } from '@ember/object';
import Component from '@glimmer/component';
import fetch from 'fetch';

export default class MarkdownFileToHtml extends Component {
  dataTestComponent = 'markdown-content';

  @action
  didInsert() {
    fetch(this.filePath).then((response) => {
      response.text().then((result) => {
        this.markdown = result;
      });
    });
  }
}
