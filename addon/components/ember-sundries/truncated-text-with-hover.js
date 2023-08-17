import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/truncated-text-with-hover';

@templateLayout(layout)
@tagName('')
export default class TruncatedTextWithHover extends Component {
  maxChars = 3;
  afterTruncatedText = '...';

  @computed('text', 'maxChars')
  get truncated() {
    if (this.text.split('').length > this.maxChars) {
      return this.text.split('').slice(0, this.maxChars).join('');
    }
    return null;
  }
}
