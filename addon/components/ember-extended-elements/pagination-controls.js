import Component from '@ember/component';
import layout from '../../../templates/components/hyrax-ember-assets/paginated-table/pagination-controls';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['table-pagination'],
  classNameBindings: ['class'],

  paginationObject: computed('paginationLinks', function() {
    var paginationLinks = this.get('paginationLinks');
    var paginationObject = {};
    $.each(paginationLinks, function(key, val) {
      var queryParamsString = val.split('?')[1];
      var queryParams = queryParamsString.split('&');
      paginationObject[key] = {};
      queryParams.forEach(function(keyValuePair) {
        const [param, value] = keyValuePair.split('=');
        if (param === 'page%5Bnumber%5D') {
          if (value) {
            paginationObject[key]["number"] = value;
          }
        }
      });
    });
    return paginationObject;
  }),
});