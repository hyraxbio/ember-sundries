import { action } from '@ember/object';
import Component from '@glimmer/component';
import isPromise from 'ember-sundries/utils/is-promise';

export default class PrintObject extends Component {
  didReceiveAttrs() {
    super.didReceiveAttrs();
    this.checkPromise(); // this.send
  }

  didUpdateAttrs() {
    super.didUpdateAttrs();
    this.checkPromise(); // this.send
  }

  @action
  checkPromise() {
    const object = this.object;
    if (isPromise(object)) {
      object.then((res) => {
        this.parseObject(res); // this.send
      });
    } else {
      this.parseObject(object); // this.send
    }
  }

  @action
  parseObject(object) {
    if (object.toJSON) {
      object = object.toJSON({ includeId: true });
    }
    (this.keysToRemove || []).forEach((key) => {
      delete object[key];
    });
    this.parsed = JSON.stringify(object, null, 2);
  }
}
