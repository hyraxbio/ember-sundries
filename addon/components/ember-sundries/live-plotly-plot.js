import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/live-plotly-plot';

export default Component.extend({
  tagName: "div",
  classNameBindings: ["class"],

  didRender: function() {
    var data = this.get('data');
    if (data) {
      Plotly.plot(this.$()[0], data.traces, data.layout);
    }
  },
});