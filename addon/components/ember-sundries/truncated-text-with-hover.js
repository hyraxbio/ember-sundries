import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
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
