import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class SelectAllCheckbox extends Component {
  @tracked relatedCollection;
  @tracked selectAllText;
  @tracked selectNoneText;
  @tracked showLabel;

  get collectionState() {
    if (!this.args.relatedCollection) {
      return;
    }
    if (
      !this.args.relatedCollection.isEvery('selected', true) &&
      this.args.relatedCollection.isAny('selected', true)
    ) {
      return 'some-selected';
    } else if (this.args.relatedCollection.isEvery('selected', true)) {
      return 'all-selected';
    } else if (!this.args.relatedCollection.isAny('selected', true)) {
      return 'none-selected';
    }
  }

  get label() {
    if (this.args.showLabel) {
      return this.collectionState === 'all-selected'
        ? this.args.selectNoneText || 'Select none'
        : this.args.selectAllText || 'Select all';
    }
  }

  @action
  selectAllClicked(value, event) {
    if (!this.args.allowPropagation) {
      event.stopPropagation();
    }
    var selectAllValue = this.collectionState === 'all-selected' ? false : true;
    this.args.relatedCollection.forEach((item) => {
      item.selected = selectAllValue;
    });
    if (this.args.afterSelectAllClicked) {
      this.args.afterSelectAllClicked(value, event, this.collectionState);
    }
  }
}
