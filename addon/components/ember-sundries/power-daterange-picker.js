import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/power-daterange-picker';
import updateTime from '../../utils/update-time';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: "",
  layout,
  dataTestType: 'power-daterange-picker',

  didInsertElement() {
    var minDate = this.minDate;
    var maxDate = this.maxDate;
    var defaultStartDate = this.defaultStartDate;
    var defaultEndDate = this.defaultEndDate;

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

    var range = {};
    if (defaultStartDate || defaultEndDate) {
      range.start = defaultStartDate;
      range.end = defaultEndDate;
      this.onSelectDateRange(range);
    }
  },

  dateDisplayFormat: computed('dateFormat', function() {
    return this.dateFormat || 'DD-MM-YYYY';
  }),

  noDatesSelected: computed('value', function() {
    return !this.value.start && !this.value.end;
  }),

  actions: {
    rangeSelected(range) {
      range.start = updateTime(range.start, this.startTime);
      range.end = updateTime(range.end, this.endTime);
      this.onSelectDateRange(range);
    },

    onOpen() {
      if (this.onOpen) {
        this.onOpen();
      }
    },

    onClose() {
      if (this.onClose) {
        this.onClose();
      }
    }
  }
});