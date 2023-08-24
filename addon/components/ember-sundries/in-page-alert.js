import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/in-page-alert';
import { tracked } from '@glimmer/tracking';

@tagName('')
@templateLayout(layout)
export default class InPageAlert extends Component {
  dataTestClass = 'in-page-alert';

  @tracked type;

  get textClass() {
    return `text-${this.type}`;
  }

  get fillClass() {
    return `fill-${this.type}`;
  }
}
