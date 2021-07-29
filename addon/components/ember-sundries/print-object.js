import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/print-object';
import isPromise from 'ember-sundries/utils/is-promise';

export default Component.extend({
  layout,
  classNames: ['print-object'],

  didReceiveAttrs() {
    console.log('didReceiveAttrs')
    this.send('checkPromise');
  },

  didUpdateAttrs() {
    this.send('checkPromise');
  },

  actions: {
    checkPromise() {
      const object = this.get('object');
      if (isPromise(object)) {
        object.then(res => {
          console.log(res)
          this.send('parseObject', res);
        });
      } else {
        this.send('parseObject', object);
      }
    },
    
    parseObject(object) {
      if (object.toJSON) {
        object = object.toJSON({includeId: true});
      }
      console.log(object);
      (this.get('keysToRemove') || []).forEach(key => {
        console.log(key);
        delete object[key]
      })
      console.log(object)
      this.set('parsed', JSON.stringify(object, null, 2))
    }
  }
});
