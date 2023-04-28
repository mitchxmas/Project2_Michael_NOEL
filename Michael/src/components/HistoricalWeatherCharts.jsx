import React, { Component } from "react";
import Chart from "react-apexcharts";

class HistoricalWeatherCharts extends Component {
  constructor(props) {
    super(props);

    const timeArray = props.historicalWeather.daily.time;
    const tempArray = props.historicalWeather.daily.temperature_2m_max;
    const rainfallArray = props.historicalWeather.daily.precipitation_sum;

    this.state = {
      series: [
        {
          name: "Rainfall",
          type: "column",
          data: rainfallArray,
          // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Temperature",
          type: "line",
          data: tempArray,
          // data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      options: {
        chart: {
          id: "historicalChart",
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Daily Weather",
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [1],
        },
        labels: timeArray,
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: `Rainfall ${props.historicalWeather.daily_units.precipitation_sum}`,
            },
          },
          {
            opposite: true,
            title: {
              text: `Temperature ${props.historicalWeather.daily_units.temperature_2m_max}`,
            },
          },
        ],
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.dateFrom !== prevProps.dateFrom) {
      this.setState({
        series: [
          {
            name: "Rainfall",
            type: "column",
            data: this.props.historicalWeather.daily.precipitation_sum,
            // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          },
          {
            name: "Temperature",
            type: "line",
            data: this.props.historicalWeather.daily.temperature_2m_max,
            // data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
          },
        ],
        options: {
          chart: {
            id: "historicalChart",
            height: 350,
            type: "line",
          },
          stroke: {
            width: [0, 4],
          },
          title: {
            text: "Daily Weather",
          },
          dataLabels: {
            enabled: false,
            enabledOnSeries: [1],
          },
          labels: this.props.historicalWeather.daily.time,
          xaxis: {
            type: "datetime",
          },
          yaxis: [
            {
              title: {
                text: `Rainfall ${this.props.historicalWeather.daily_units.precipitation_sum}`,
              },
            },
            {
              opposite: true,
              title: {
                text: `Temperature ${this.props.historicalWeather.daily_units.temperature_2m_max}`,
              },
            },
          ],
        },
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.dateTo !== prevProps.dateTo) {
      this.setState({
        series: [
          {
            name: "Rainfall",
            type: "column",
            data: this.props.historicalWeather.daily.precipitation_sum,
            // data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          },
          {
            name: "Temperature",
            type: "line",
            data: this.props.historicalWeather.daily.temperature_2m_max,
            // data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
          },
        ],
        options: {
          chart: {
            id: "historicalChart",
            height: 350,
            type: "line",
          },
          stroke: {
            width: [0, 4],
          },
          title: {
            text: "Daily Weather",
          },
          dataLabels: {
            enabled: false,
            enabledOnSeries: [1],
          },
          labels: this.props.historicalWeather.daily.time,
          xaxis: {
            type: "datetime",
          },
          yaxis: [
            {
              title: {
                text: `Rainfall ${this.props.historicalWeather.daily_units.precipitation_sum}`,
              },
            },
            {
              opposite: true,
              title: {
                text: `Temperature ${this.props.historicalWeather.daily_units.temperature_2m_max}`,
              },
            },
          ],
        },
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row container">
          <div className="mixed-chart container">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="450px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HistoricalWeatherCharts;
