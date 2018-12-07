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
    var minDate = this.get('minDate');
    var maxDate = this.get('maxDate');
    var defaultStartDate = this.get('start.defaultDate');
    var defaultEndDate = this.get('end.defaultDate');

    if (defaultStartDate < minDate) {
      defaultStartDate = minDate;
      console.warn('Your default start date is before the earliest allowed date. It has been changed to the earliest allowed date.');
    }

    if (defaultEndDate > maxDate) {
      defaultEndDate = maxDate;
      console.warn('Your default end date is after the latest allowed date. It has been changed to the latest allowed date.');
    }

    if (minDate > maxDate) {
      throw Error('You have added a date range component where the earliest allowed date is after the latest allowed date. As such, users will not be able to select any dates.');
    }

    this.set('range', {});
    if (defaultStartDate) {
      this.set('range.start', defaultStartDate);
    }
    if (defaultEndDate) {
      this.set('range.end', defaultEndDate);
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