import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/print-object';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['print-object'],

  objectsArray: computed('object', function () {
    var levelPadding = this.get('levelPadding') || 16;
    var separator = this.get('separator') || ':';
    var object = this.get('object');
    var array = [];
    var createObject = function (object, keyPrefix) {
      for (var key in object) {
        var newObjectKey = keyPrefix ? `${keyPrefix}.${key}` : key;
        var level = newObjectKey.split('.').length;
        var style = `padding-left: ${(level)*levelPadding}px`;
        var escapedStyle = style.htmlSafe();
        var newObject = {
          key: key,
          keyPath: newObjectKey,
          level: level,
          style: escapedStyle
        };
        if (typeof object[key] !== 'object') {
          newObject.value = object[key];
          newObject.separator = separator;
          array.push(newObject);
        } else {
          array.push(newObject);
          createObject(object[key], newObjectKey);
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
