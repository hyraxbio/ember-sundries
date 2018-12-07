import Component from '@ember/component';
import layout from '../../templates/components/ember-extended-elements/power-date-range-picker';
import updateTime from '../../utils/update-time';
import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';

export default Component.extend({
  layout,
  classNames: ['ember-power-daterange-picker'],
  attributeBindings: ['dataTestType:data-test-type', 'data-test-id'],

  didInsertElement() {
    this.set('range', {});
    if (this.get('start.defaultDate')) {
      this.set('range.start', this.get('start.defaultDate'));
    }
    if (this.get('end.defaultDate')) {
      this.set('range.end', this.get('end.defaultDate'));
    }
  },

  dateDisplayFormat: computed('dateFormat', function() {
    return this.get('dateFormat') || 'DD-MM-YYYY';
  }),

  dataTestType: "power-datetime-picker",
  actions: {
    rangeSelected(range) {
      this.set('range', range);
      range.start = updateTime(range.start, this.get('startTime'));
      range.end = updateTime(range.end, this.get('endTime'));
      var value;
      if (!range.start || !range.end) {
        value = null;
      } else {
        value = range;
      }
      this.onSelectDateRange(value);
    }
  }
});