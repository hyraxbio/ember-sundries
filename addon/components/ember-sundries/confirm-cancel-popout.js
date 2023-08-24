import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { action } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/confirm-cancel-popout';
import { tracked } from '@glimmer/tracking';

@templateLayout(layout)
@tagName('')
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
    this.send('closePopoutBox', dropdown);
  }
}
