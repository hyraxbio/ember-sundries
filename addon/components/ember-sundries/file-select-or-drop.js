import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-select-or-drop';

@tagName('')
@templateLayout(layout)
export default class FileSelectOrDrop extends Component {}
