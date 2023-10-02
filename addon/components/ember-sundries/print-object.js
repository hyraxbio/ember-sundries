import { action } from '@ember/object';
import Component from '@glimmer/component';
import isPromise from 'ember-sundries/utils/is-promise';
import { tracked } from '@glimmer/tracking';

export default class PrintObject extends Component {
  @tracked parsed;

  @action
  checkPromise() {
    const object = this.args.object;
    if (isPromise(object)) {
      object.then((res) => {
        this.parseObject(res);
      });
    } else {
      this.parseObject(object);
    }
  }

  @action
  parseObject(object) {
    if (object.toJSON) {
      object = object.toJSON({ includeId: true });
    }
    (this.args.keysToRemove || []).forEach((key) => {
      delete object[key];
    });
    this.parsed = JSON.stringify(object, null, 2);
  }
}
