import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this.formField = {
      fieldLabel: "Birth date",
      fieldId: "personal_details.birth_date",
      fieldType: "powerDatePicker",
      validationRules: [{ 'validationMethod': 'required' }, { 'validationMethod': 'isDate' }],
      validationEvents: ['insert'],
      minDate: moment("2016-11-05").toDate(),
      maxDate: moment("2019-12-05").toDate(),
      allowNavigationOutOfRange: false,
      calendarStartMonth: '09/2018',
      defaultDate: moment("2018-08-28").toDate(),
      // dateFormat:'YYYY/MM/DD',
      // defaultTime: '12:07',
      timeSelect: true,
      // dateButtonText: 'Test date',
      // timeButtonText: 'Test time'
    }
  },

  actions: {
    onUserInteraction(value, two) {
      console.log(value);
      console.log(two);
      this.set('formField.value', value);
    }
  }
});
