import React, { useState, useEffect, useRef } from "react";
import HourlyWeatherCharts from "./HourlyWeatherCharts";

const HourlyWeather = (props) => {
  return (
    <div className="container">
      <br />
      <h3>Hourly Weather</h3>
      <br />
      <div className="container">
        <HourlyWeatherCharts hourlyWeather={props.hourlyWeather} />
      </div>
    </div>
  );
};

export default HourlyWeather;
