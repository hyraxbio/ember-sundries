import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this.formField = {
      fieldLabel: "Test",
      fieldId: "test",
      fieldType: "dateRange",
      validationRules: [{ 'validationMethod': 'required' }, { 'validationMethod': 'isDate' }],
      validationEvents: ['insert'],
      minDate: moment("2013-11-05").toDate(),
      maxDate: moment("2020-12-05").toDate(),
      calendarStartMonth: '09/2018',
      dateFormat:'YYYY/MM/DD',
      start: {
        defaultDate: moment("2015-08-28").toDate(),
        time: '12:07',
      },
      end: {
        defaultDate: moment("2023-08-28").toDate(),
        time: '23:59',
      }
    };
  },
  center: new Date('2016-05-17'),
  minDate: moment("2018-11-05").toDate(),

  actions: {
    onUserInteraction(value) {
      console.log(value);
    },


  }
});
