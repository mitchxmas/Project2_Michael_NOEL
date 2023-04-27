import React, { Component } from "react";
import Chart from "react-apexcharts";

class HourlyWeatherCharts extends Component {
  constructor(props) {
    super(props);

    console.table(props.hourlyWeather.hourly);
    const slicer = 300;
    const timeArray = [...props.hourlyWeather.hourly.time].slice(0, slicer);
    const tempArray = [...props.hourlyWeather.hourly.temperature_2m].slice(
      0,
      slicer
    );
    const rainfallArray = [...props.hourlyWeather.hourly.precipitation].slice(
      0,
      slicer
    );

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
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: timeArray,
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: `Rainfall ${props.hourlyWeather.hourly_units.precipitation}`,
            },
          },
          {
            opposite: true,
            title: {
              text: `Temperature ${props.hourlyWeather.hourly_units.temperature_2m}`,
            },
          },
        ],
      },
    };
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

export default HourlyWeatherCharts;
