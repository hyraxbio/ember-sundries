import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/confirm-cancel-modal';

export default Component.extend({
  layout,
  actions: {
    closeModal() {
      const activeModalProp = this.activeModal
        ? 'activeModal'
        : 'modalDialogs.activeModal'; /// Use the prop passed in or fallback to the activeModal prop on tthe modalDialogs service
      this.set(activeModalProp, false);
    },
  },
});
