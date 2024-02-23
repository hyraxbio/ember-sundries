import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ModalDialogWithTrigger extends Component {
  @service
  modalDialogs;
}
