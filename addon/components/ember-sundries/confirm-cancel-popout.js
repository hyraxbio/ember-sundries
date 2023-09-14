import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ConfirmCancelPopout extends Component {
  dataTestClass = 'confirm-cancel-dialogue';

  @tracked mainButtonText;

  get dataTestName() {
    return (this.mainButtonText || '').replace(/\s+/g, '-').toLowerCase();
  }

  @action
  didInsert() {
    if (this.positionStatic) {
      this.renderInPlace = true;
    }
  }

  @action
  closePopoutBox(dropdown) {
    dropdown.actions.close();
  }

  @action
  confirm(dropdown) {
    if (this.confirmAction() === 'confirmActionFail') {
      return;
    }
    this.closePopoutBox(dropdown); // this.send
  }
}
