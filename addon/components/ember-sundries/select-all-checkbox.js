import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-sundries/select-all-checkbox';

export default Component.extend({
  layout,
  tagName: "",

  collectionState: computed('relatedCollection.@each.selected', function() {
    if (!this.get('relatedCollection')) {
      return;
    }
    if (!this.get('relatedCollection').isEvery('selected', true) && this.get('relatedCollection').isAny('selected', true)) {
      return 'some-selected';
    } else if (this.get('relatedCollection').isEvery('selected', true)) {
      return 'all-selected';
    } else if (!this.get('relatedCollection').isAny('selected', true)) {
      return 'none-selected';
    }
  }),

  label: computed('collectionState', function() {
    if (this.showLabel) {
      return this.collectionState === 'all-selected' ? this.selectNoneText || 'Select none' : this.selectAllText || 'Select all';
    }
  }),

  actions: {
    selectAllClicked(value, event) {
      if (!this.allowPropagation) {
        event.stopPropagation();
      }
      var selectAllValue = this.get('collectionState') === 'all-selected' ? false : true;
      this.relatedCollection.setEach('selected', selectAllValue);
      if (this.afterSelectAllClicked) {
        this.afterSelectAllClicked(value, event, this.collectionState)
      }
    }
  }
});