import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class TruncatedTextWithHover extends Component {
  afterTruncatedText = '...';
  @tracked text;
  @tracked maxChars = 3;

  get truncated() {
    if (this.args.text.split('').length > this.args.maxChars) {
      return this.args.text.split('').slice(0, this.args.maxChars).join('');
    }
    return null;
  }
}
