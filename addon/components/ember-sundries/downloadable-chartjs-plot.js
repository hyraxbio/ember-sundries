import Component from '@glimmer/component';
import base64ImageDownload from 'ember-sundries/utils/base64-image-download';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

class ChartData {
  constructor(args) {
    for (const key in args) {
      if (args[key] === undefined || args[key] === null) {
        continue;
      }
      this[key] = args[key];
    }
  }
}

export default class DownloadableChartjsPlot extends Component {
  @tracked parsedChartData;
  @tracked animationComplete;
  @tracked chart;

  @action
  didInsert() {
    var self = this;
    if (!this.args.chartData) {
      return;
    }
    var chartData = new ChartData(this.args.chartData);
    const animation = {
      onComplete(value) {
        self.animationComplete = true;
        self.chart = value.chart;
      },
    };
    chartData.options.animation = animation;
    const plugins = [
      {
        beforeDraw(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = 'white';
          ctx.fillRect(
            0,
            0,
            chartInstance.chart.width,
            chartInstance.chart.height,
          );
        },
      },
    ];
    chartData.plugins = plugins;
    this.parsedChartData = chartData;
  }

  @action
  download() {
    base64ImageDownload(this.chart.toBase64Image(), this.args.pngFileName);
  }
}
