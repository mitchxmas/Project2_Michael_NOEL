import React from "react";
import styles from "./DailyWeather.module.css";

const DailyWeatherPerDay = (props) => {
  const weathercodes = [
    { code: [0], description: "Clear sky", link: "./images/0_clear_sky.png" },
    {
      code: [1, 2, 3],
      description: "Mainly clear, partly cloudy, and overcast",
      link: "./images/1.2.3.mainly_clear_partly_cloudy.png",
    },
    {
      code: [45, 48],
      description: "Fog and depositing rime fog",
      link: "./images/45.48.fog.png",
    },
    {
      code: [51, 53, 55],
      description: "Drizzle: Light, moderate, and dense intensity",
      link: "./images/51.53.55.drizzle.png",
    },
    {
      code: [56, 57],
      description: "Freezing Drizzle: Light and dense intensity",
      link: "./images/56.57.freezing_drizzle.png",
    },
    {
      code: [61, 63, 65],
      description: "Rain: Slight, moderate and heavy intensity",
      link: "./images/61.63.65.heavy_rain.png",
    },
    {
      code: [66, 67],
      description: "Freezing Rain: Light and heavy intensity",
      link: "./images/56.57.freezing_drizzle.png",
    },
    {
      code: [71, 73, 75],
      description: "Snow fall: Slight, moderate, and heavy intensity",
      link: "./images/85.86.snow_showers_slight_and_heavy.png",
    },
    {
      code: [77],
      description: "Snow grains",
      link: "./images/85.86.snow_showers_slight_and_heavy.png",
    },
    {
      code: [80, 81, 82],
      description: "Rain showers: Slight, moderate, and violent",
      link: "./images/80.81.82_rain_showers.png",
    },
    {
      code: [85, 86],
      description: "Snow showers slight and heavy",
      link: "./images/85.86.snow_showers_slight_and_heavy.png",
    },
    {
      code: [95, 96, 99],
      description: "Thunderstorm: Slight or moderate",
      link: "./images/95.thunderstorm_slight_or_moderate.png",
    },
  ];

  const findWeatherCode = weathercodes.find((item) => {
    return item.code.includes(props.weather.daily.weathercode[props.index]);
  });

  const iconLink = findWeatherCode.link;

  const daysForecast = [
    "D-3",
    "D-2",
    "D-1",
    "Today",
    "D+1",
    "D+2",
    "D+3",
    "D+4",
    "D+5",
    "D+6",
  ];

  // Create a new Date object with the timestamp
  const date = new Date(props.weather.daily.time[props.index]);

  // Get the day and month from the Date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // add 1 because getMonth() returns a zero-based index

  // Output the day and month in the desired format
  const dateDDMM = `${day}/${month}`;

  return (
    <div
      className={`container daily_weather_tile ${styles.daily_weather_tile}`}
    >
      <h5>{daysForecast[props.index]}</h5>
      <br />
      <div>{dateDDMM}</div>
      <div>
        {props.weather.daily.temperature_2m_max[props.index]}
        {props.weather.daily_units.temperature_2m_max}
      </div>
      <div>
        Rainfall: {props.weather.daily.precipitation_sum[props.index]}
        {props.weather.daily_units.precipitation_sum}
      </div>
      <div className="container">
        <img className={`icons ${styles.weather_icons}`} src={iconLink}></img>
      </div>
    </div>
  );
};

export default DailyWeatherPerDay;
