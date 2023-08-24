import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/truncated-text-with-hover';
import { tracked } from '@glimmer/tracking';
@templateLayout(layout)
@tagName('')
export default class TruncatedTextWithHover extends Component {
  afterTruncatedText = '...';
  @tracked text;
  @tracked maxChars = 3;

  get truncated() {
    if (this.text.split('').length > this.maxChars) {
      return this.text.split('').slice(0, this.maxChars).join('');
    }
    return null;
  }
}
