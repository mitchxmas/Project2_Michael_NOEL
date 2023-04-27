import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  useEffect(() => {
    if (props.city) {
      props.getDailyWeather();
    }
  }, [props.city]);

  console.log("props.flagSrc: ", props.flagSrc);
  console.log("city object", props.city);

  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            {props.city && (
              <div>
                <img
                  width="20"
                  className={styles.flag}
                  src={props.city.flagSrc}
                ></img>
                {"  "}
                {props.city.name}, {props.city.countryCode}
              </div>
            )}
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
            >
              Introduction
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/dailyweather"
            >
              Daily Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/hourlyweather"
            >
              Hourly Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/historicalweather"
            >
              Historical data
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
