import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.collection = [
      {
        name: '1',
      },
      {
        name: '2',
      },
      // {
      //   name: '3'
      // }, {
      //   name: '4'
      // },{
      //   name: '5'
      // },{
      //   name: '6'
      // }
    ].map((item) => EmberObject.create(item));
  },

  actions: {
    toggleSelect(item) {
      item.toggleProperty('selected');
    },
  },
});
