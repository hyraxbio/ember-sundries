import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { action, computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/confirm-cancel-popout';

@templateLayout(layout)
@tagName('')
export default class ConfirmCancelPopout extends Component {
  dataTestClass = 'confirm-cancel-dialogue';

  @computed('mainButtonText')
  get dataTestName() {
    return (this.mainButtonText || '').replace(/\s+/g, '-').toLowerCase();
  }

  @action
  didInsert() {
    if (this.positionStatic) {
      this.set('renderInPlace', true);
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
