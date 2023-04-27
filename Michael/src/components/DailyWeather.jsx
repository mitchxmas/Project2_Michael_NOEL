import React, { useState, useEffect, useRef } from "react";
import styles from "./DailyWeather.module.css";
import DailyWeatherPerDay from "./DailyWeatherPerDay";
import DailyWeatherToday from "./DailyWeatherToday";

const DailyWeather = (props) => {
  return (
    <>
      <div className="container">
        <br />
        <h3>Daily Weather</h3>
        <div
          className={`container daily_weather_container ${styles.daily_weather_container} ${styles.daily_weather_today}`}
        >
          {props.weather.daily.time.map((item, index) => {
            if (index === 3) {
              return (
                <DailyWeatherToday
                  key={index}
                  id={item.id}
                  weather={props.weather}
                  index={index}
                  city={props.city}
                />
              );
            }
          })}

          <div className={styles.daily_weather}>
            {props.weather.daily.time.map((item, index) => {
              if (index >= 4) {
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
      </div>
    </>
  );
};

export default DailyWeather;
