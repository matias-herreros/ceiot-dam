import { IonNote } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-graph',
  standalone: true,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  imports: [IonNote],
})
export class GraphComponent implements OnInit {
  public myChart!: Highcharts.Chart;
  private chartOptions!: Highcharts.Options;
  @Input() gaugeValue!: number;

  constructor() {
    // setTimeout(() => {
    //   this.valorObtenido = 60;
    //   this.myChart.series[0].setData([this.valorObtenido]);
    // }, 1000);
  }

  ngOnInit() {
    this.generateChart();
  }

  generateChart() {
    this.chartOptions = {
      accessibility: { enabled: false },
      chart: {
        type: 'gauge',
        plotBackgroundColor: undefined,
        plotBackgroundImage: undefined,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'transparent',
      },
      title: {
        text: '',
      },
      credits: { enabled: false },
      pane: {
        startAngle: -150,
        endAngle: 150,
      },
      yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 0,
        },
        title: {
          text: 'kPa',
        },
        plotBands: [
          {
            from: 0,
            to: 10,
            color: '#55BF3B', // green
          },
          {
            from: 10,
            to: 30,
            color: '#DDDF0D', // yellow
          },
          {
            from: 30,
            to: 100,
            color: '#DF5353', // red
          },
        ],
      },
      series: [
        {
          name: 'kPa',
          data: [this.gaugeValue],
          tooltip: {
            valueSuffix: ' kPa',
          },
          type: 'gauge',
        },
      ],
    };
    this.myChart = Highcharts.chart('deviceChart', this.chartOptions);
  }
}
