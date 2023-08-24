import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { action } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/select-all-checkbox';
import { tracked } from '@glimmer/tracking';
@templateLayout(layout)
@tagName('')
export default class SelectAllCheckbox extends Component {
  @tracked relatedCollection;
  @tracked selectAllText;
  @tracked selectNoneText;
  @tracked showLabel;

  get collectionState() {
    if (!this.relatedCollection) {
      return;
    }
    if (
      !this.relatedCollection.isEvery('selected', true) &&
      this.relatedCollection.isAny('selected', true)
    ) {
      return 'some-selected';
    } else if (this.relatedCollection.isEvery('selected', true)) {
      return 'all-selected';
    } else if (!this.relatedCollection.isAny('selected', true)) {
      return 'none-selected';
    }
  }

  get label() {
    if (this.showLabel) {
      return this.collectionState === 'all-selected'
        ? this.selectNoneText || 'Select none'
        : this.selectAllText || 'Select all';
    }
  }

  @action
  selectAllClicked(value, event) {
    if (!this.allowPropagation) {
      event.stopPropagation();
    }
    var selectAllValue = this.collectionState === 'all-selected' ? false : true;
    this.relatedCollection.forEach((item) => {
      item.selected = selectAllValue;
    });
    if (this.afterSelectAllClicked) {
      this.afterSelectAllClicked(value, event, this.collectionState);
    }
  }
}
