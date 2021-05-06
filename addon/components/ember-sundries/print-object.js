import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/print-object';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default Component.extend({
  layout,
  classNames: ['print-object'],

  objectsArray: computed('object', function () {
    var levelPadding = this.get('levelPadding') || 16;
    var separator = this.get('separator') || ':';
    var object = this.get('object');
    console.log(object);

    // If an Ember model is passed, get the JSON from it before proceeding, to avoid craching the browser..
    var array = [];
    var createObject = function (object, keyPrefix) {
      if (object instanceof DS.Model) {
        object = object.toJSON({includeId: true});
      }
      for (var key in object) {
        var newObjectKey = keyPrefix ? `${keyPrefix}.${key}` : key;
        var level = newObjectKey.split('.').length;
        var style = `padding-left: ${(level)*levelPadding}px`;
        var escapedStyle = style.htmlSafe();
        var newObject = {
          key: key,
          keyPath: newObjectKey,
          level: level,
          style: escapedStyle,
          separator: separator
        };
          
        if (typeof object[key] !== 'object') {
          newObject.value = object[key] || 'null';
          array.push(newObject);
        } else {
          if (!object[key]) {
            newObject.value = 'null';
          } else {
            createObject(object[key], newObjectKey);
          }
          array.push(newObject);
         
        }
      }
    };
    createObject(object);
    return array.sortBy('keyPath');
  }),

  filteredArray: computed('objectsArray', 'keysToRemove', function () {
    var objectsArray = this.get('objectsArray');
    var keysToRemove = this.get('keysToRemove') || [];
    keysToRemove = keysToRemove.concat(['_super', '__meta__']);
    if (keysToRemove) {
      objectsArray = objectsArray.filter(object => {
        function isMatch(keyToRemove) {
          return `.${object.keyPath}.`.indexOf(`.${keyToRemove}.`) > -1;
        }
        var conditions = !(keysToRemove.some(isMatch));
        return conditions;
      });
    }
    return objectsArray.sortBy('keyPath');
  }),
});
