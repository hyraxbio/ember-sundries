import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/markdown-file-to-html';
import fetch from 'fetch';

@tagName('')
@templateLayout(layout)
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
