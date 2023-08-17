import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/print-object';
import isPromise from 'ember-sundries/utils/is-promise';

@tagName('')
@templateLayout(layout)
export default class PrintObject extends Component {
  didReceiveAttrs() {
    super.didReceiveAttrs();
    console.log('didReceiveAttrs');
    this.send('checkPromise');
  }

  didUpdateAttrs() {
    super.didUpdateAttrs();
    this.send('checkPromise');
  }

  @action
  checkPromise() {
    const object = this.object;
    if (isPromise(object)) {
      object.then((res) => {
        this.send('parseObject', res);
      });
    } else {
      this.send('parseObject', object);
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
    this.set('parsed', JSON.stringify(object, null, 2));
  }
}
