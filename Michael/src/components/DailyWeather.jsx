import React, { useState, useEffect, useRef } from "react";
import styles from "./DailyWeather.module.css";
import DailyWeatherPerDay from "./DailyWeatherPerDay";

const DailyWeather = (props) => {
  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <>
      <div className="container">
        <h1>Daily Weather</h1>
        <div> {props.city.name}</div>
        <div>Past 3 days</div>
        <div
          className={`container daily_weather_container ${styles.daily_weather}`}
        >
          {props.weather.daily.time.map((item, index) => {
            if (index <= 2) {
              return (
                <DailyWeatherPerDay
                  key={index}
                  id={item.id}
                  weather={props.weather}
                  index={index}
                  city={props.city}
                />
              );
            }
          })}
        </div>
        <div>Today</div>
        <div
          className={`container daily_weather_container ${styles.daily_weather}`}
        >
          {props.weather.daily.time.map((item, index) => {
            if (index === 3) {
              return (
                <DailyWeatherPerDay
                  key={index}
                  id={item.id}
                  weather={props.weather}
                  index={index}
                  city={props.city}
                />
              );
            }
          })}
        </div>
        <div>Forecast</div>
        <div
          className={`container daily_weather_container ${styles.daily_weather}`}
        >
          {props.weather.daily.time.map((item, index) => {
            if (index > 3) {
              return (
                <DailyWeatherPerDay
                  key={index}
                  id={item.id}
                  weather={props.weather}
                  index={index}
                  city={props.city}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DailyWeather;
