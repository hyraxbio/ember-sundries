import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/power-datetime-picker';
import { computed } from '@ember/object'; 

export default Component.extend({
  tagName: "",
  layout,
  dataTestType: 'power-datetime-picker',

  init: function() {
    this._super(...arguments);
    this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    this.minutesSeconds = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
  },

  didInsertElement: function() {
    if (this.defaultDate) {
      this.set('selectedDate', this.defaultDate);
    }
    if (this.defaultTime) {
      this.set('selectedHour', this.defaultTime.split(':')[0]);
      this.set('selectedMinute', this.defaultTime.split(':')[1]);
    }
    if (this.calendarStartMonth) {
      var split = this.calendarStartMonth.split('/');
      this.set('calendarStartDate', moment().year(parseInt(split[1])).month(parseInt(split[0]) - 1).day(1));
    }
  },

  navButtons: computed('center', function() {
    var allowNavigationOutOfRange = this.allowNavigationOutOfRange;
    return {
      nextMonth: allowNavigationOutOfRange || this.targetInRange(1, 'months'),
      nextYear: allowNavigationOutOfRange || this.targetInRange(1, 'years'),
      previousMonth: allowNavigationOutOfRange || this.targetInRange(-1, 'months'),
      previousYear: allowNavigationOutOfRange || this.targetInRange(-1, 'years'),
    }
  }),

  dateDisplayFormat: computed('dateFormat', function() {
    return this.dateFormat || 'DD-MM-YYYY'; // TODO this must be a global option
  }),

  actions: {
    clearDateTime: function() {
      this.onSelectDateTime(null);
    },

    setDate: function(selectedDate) {
      var currentDateTime = this.value;
      var currentHour = moment(currentDateTime).hour();
      var currentMinute = moment(currentDateTime).minute();
      var currentSecond = moment(currentDateTime).second();
      var newDateTime;
      if (currentDateTime) {
        newDateTime = moment(selectedDate).hour(currentHour).minute(currentMinute).second(currentSecond).toDate();
      }
      this.onSelectDateTime(newDateTime);
    },

    setTime: function(unit, value) {
      var currentDateTime = this.value;
      var newDateTime;
      if (unit === 'hour') {
        newDateTime = moment(currentDateTime).hour(value);
      } else if (unit === 'minute') {
        newDateTime = moment(currentDateTime).minute(value);
      } else if (unit === 'second') {
        newDateTime = moment(currentDateTime).second(value);
      }
      this.onSelectDateTime(newDateTime);
    },

    onTriggerFocus: function(datepicker) {
      datepicker.actions.open();
      var startDate = this.calendarStartDate || moment().toDate()
      if (this.maxDate < moment().toDate()) {
        startDate = this.maxDate;
      }
      if (this.minDate > moment().toDate() ||
        this.minDate < moment().toDate() && this.maxDate < moment().toDate() ||
        this.minDate > moment().toDate() && this.maxDate > moment().toDate()) {
        startDate = this.minDate;
      }
      this.set('center', startDate);
    },

    navigate: function(datepicker, span, units) {
      if (this.allowNavigationOutOfRange || this.targetInRange(span, units)) {
        datepicker.actions.moveCenter(span, units);
      }
    },

    selectDay: function(datepicker, span, units) {
      var targetDay;
      var startOfVisibleMonth = moment(this.center).startOf('month').toDate();
      var endOfVisibleMonth = moment(this.center).endOf('month').toDate();
      var currentSelected = moment(this.selectedDate);
      if (this.selectedDate >= startOfVisibleMonth && this.selectedDate <= endOfVisibleMonth) {
        targetDay = currentSelected.add(span, units);
      } else {
        targetDay = startOfVisibleMonth;
      }
      if (targetDay > this.maxDate) {
        targetDay = this.maxDate;
      }
      if (targetDay < this.minDate) {
        targetDay = this.minDate;
      }
      this.set('selectedDate', targetDay);
      this.set('center', this.selectedDate);
    },

    onTriggerKeydown(datepicker, e) {
      if (e.keyCode === 13) {
        this.send('setDate', this.selectedDate);
        e.preventDefault();
      }
      if (e.keyCode === 39) {
        if (e.metaKey) {
          if (e.shiftKey) {
            this.send('navigate', datepicker, 1, 'years');
          } else {
            this.send('navigate', datepicker, 1, 'months');
          }
        } else {
          this.send('selectDay', datepicker, 1, 'days');
        }
        e.preventDefault();
      }
      if (e.keyCode === 37) {
        if (e.metaKey) {
          if (e.shiftKey) {
            this.send('navigate', datepicker, -1, 'years');
          } else {
            this.send('navigate', datepicker, -1, 'months');
          }
        } else {
          this.send('selectDay', datepicker, -1, 'days');
        }
        e.preventDefault();
      }
      if (e.keyCode === 40) {
        if (!datepicker.isOpen) {
          datepicker.actions.open();
        } else {
          this.send('selectDay', datepicker, 7, 'days');

        }
        e.preventDefault();
      }
      if (e.keyCode === 38) {
        if (!datepicker.isOpen) {
          datepicker.actions.open();
        } else {
          this.send('selectDay', datepicker, -7, 'days');

        }
        e.preventDefault();
      }
    },
  },

  targetInRange: function(span, units) {
    var firstOfTargetMonth = moment(this.center).add(span, units).startOf('month').toDate();
    var lastOfTargetMonth = moment(this.center).add(span, units).endOf('month').toDate();
    if (firstOfTargetMonth > this.maxDate || lastOfTargetMonth < this.minDate) {
      return false;
    }
    return true;
  }
});
// TODO
// Bundle ember truth helpers or remove or statements