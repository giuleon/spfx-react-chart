import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './Chart.module.scss';
import { IChartProps } from './IChartProps';
//import * as Chartjs from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Polar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';

export interface IChartData {
  data: {};
}
export default class Chart extends React.Component<IChartProps, IChartData> {
  constructor(props: IChartProps, state: IChartData) {
    super(props);

    var _labels = props.labels.split(',');
    var _data = props.dataset.split(',');
    this.state = {
      data: {}
    };
  }
  public componentWillReceiveProps(props: IChartProps): void {
    console.log("componentWillReceiveProps!!");
    this.createChart(props.chart, props.dataset, props.labels);
  }

  // public render(): React.ReactElement<IChartProps> {
  public render(): JSX.Element {
    var chartType = this.props.chart.toLowerCase();
    if(chartType === "line") {
      return (
        <div>
          <Line data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "bar")  {
      return (
        <div>
          <Bar data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "doughnut") {
      return (
        <div>
          <Doughnut data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "horizontalbar") {
      return (
        <div>
          <HorizontalBar data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "pie") {
      return (
        <div>
          <Pie data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "polar") {
      return (
        <div>
          <Polar data={this.state.data} />
        </div>
      );
    }
    else if(chartType === "radar") {
      return (
        <div>
          <Radar data={this.state.data} />
        </div>
      );
    }
  }

  public componentDidMount() {
    this.createChart(this.props.chart, this.props.dataset, this.props.labels);
  }

  private createChart(chartType: string, dataset: string, labels: string): void {
    var _data = dataset.split(',');
    var _labels = labels.split(',');
    this.setState({
      data: {
        labels: _labels,
        datasets: [
          {
            label: 'User\'s visits',
            fill: false,
            lineTension: 0.1,
            backgroundColor: ['rgba(75,192,192,0.4)',
              'rgb(255, 99, 132)'],
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: _data
          }
        ]
      }
    })
  }
}
