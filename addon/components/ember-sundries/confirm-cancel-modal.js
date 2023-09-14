import { action } from '@ember/object';
import { layout as templateLayout } from '@ember-decorators/component';
import Component from '@glimmer/component';

export default class ConfirmCancelModal extends Component {
  @action
  closeModal() {
    const activeModalProp = this.activeModal
      ? 'activeModal'
      : 'modalDialogs.activeModal'; /// Use the prop passed in or fallback to the activeModal prop on tthe modalDialogs service
    this[activeModalProp] = false;
  }
}
