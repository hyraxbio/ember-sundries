import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/in-page-alert';

@tagName('')
@templateLayout(layout)
export default class InPageAlert extends Component {
  dataTestClass = 'in-page-alert';

  @computed('type')
  get textClass() {
    return `text-${this.type}`;
  }

  @computed('type')
  get fillClass() {
    return `fill-${this.type}`;
  }
}
