import React, { useState, useEffect, useRef } from "react";
import DailyWeather from "./DailyWeather";

const LocationSelection = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("berlin");
  const [showLocations, setShowLocations] = useState(false);
  const [weather, setWeather] = useState({
    latitude: 52.52,
    longitude: 13.419998,
    generationtime_ms: 0.3409385681152344,
    utc_offset_seconds: 7200,
    timezone: "Europe/Berlin",
    timezone_abbreviation: "CEST",
    elevation: 46.0,
    daily_units: {
      time: "iso8601",
      weathercode: "wmo code",
      temperature_2m_max: "°C",
      temperature_2m_min: "°C",
      sunrise: "iso8601",
      sunset: "iso8601",
      uv_index_max: "",
      precipitation_sum: "mm",
      windspeed_10m_max: "km/h",
    },
    daily: {
      time: [
        "2023-04-21",
        "2023-04-22",
        "2023-04-23",
        "2023-04-24",
        "2023-04-25",
        "2023-04-26",
        "2023-04-27",
        "2023-04-28",
        "2023-04-29",
        "2023-04-30",
      ],
      weathercode: [1, 3, 61, 80, 61, 3, 3, 80, 3, 95],
      temperature_2m_max: [
        20.0, 22.1, 17.0, 16.9, 9.7, 10.4, 13.4, 14.8, 18.3, 21.3,
      ],
      temperature_2m_min: [8.4, 8.5, 12.6, 9.0, 5.8, 2.4, 3.0, 7.3, 10.3, 11.1],
      sunrise: [
        "2023-04-21T05:53",
        "2023-04-22T05:51",
        "2023-04-23T05:49",
        "2023-04-24T05:47",
        "2023-04-25T05:45",
        "2023-04-26T05:43",
        "2023-04-27T05:41",
        "2023-04-28T05:39",
        "2023-04-29T05:37",
        "2023-04-30T05:35",
      ],
      sunset: [
        "2023-04-21T20:16",
        "2023-04-22T20:18",
        "2023-04-23T20:19",
        "2023-04-24T20:21",
        "2023-04-25T20:23",
        "2023-04-26T20:25",
        "2023-04-27T20:26",
        "2023-04-28T20:28",
        "2023-04-29T20:30",
        "2023-04-30T20:32",
      ],
      uv_index_max: [5.45, 5.55, 4.0, 5.0, 3.6, 4.7, 4.4, 3.95, 3.05, 5.25],
      precipitation_sum: [0.0, 0.0, 2.9, 0.1, 0.2, 0.0, 0.0, 6.9, 0.3, 2.1],
      windspeed_10m_max: [
        17.4, 14.2, 12.4, 22.2, 22.6, 16.3, 11.9, 15.0, 6.6, 11.2,
      ],
    },
  });
  const [city, setCity] = useState({
    id: 2950159,
    name: "Berlin",
    latitude: 52.52437,
    longitude: 13.41053,
    timezone: "Europe/Berlin",
  });

  // {
  //   id: 2950159,
  //   name: "Berlin",
  //   latitude: 52.52437,
  //   longitude: 13.41053,
  //   timezone: "Europe/Berlin",
  // }

  const getLocations = async () => {
    setShowLocations(true);
    setSearch("");

    const url =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      search +
      "&count=5&language=en&format=json";
    const res = await fetch(url);
    const data = await res.json();
    setLocations(data.results);
  };

  const handleSelect = (event) => {
    // Get the selected city's information from the Locations state variable
    const selectedCity = locations.find(
      (location) => location.name === event.target.value
    );

    // Update the City state variable with the selected city's information
    setCity({
      name: selectedCity.name,
      latitude: selectedCity.latitude,
      longitude: selectedCity.longitude,
      timezone: selectedCity.timeZone,
    });

    console.table(city);
  };

  const getCity = async (id) => {
    const url = "https://geocoding-api.open-meteo.com/v1/get?id=" + id;
    const res = await fetch(url);
    const data = await res.json();
    setCity(data);
    setShowLocations(false);
    console.log("city object:");
    console.table(city);
  };

  const getWeather = async () => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max&past_days=3&timezone=" +
      city.timezone +
      "";
    const res = await fetch(url);
    const data = await res.json();

    setWeather(data);
  };

  // useEffect(() => {
  //   getWeather();
  // }, [city]);

  useEffect(() => {
    getLocations();
  }, []);

  console.log("search :", search);

  return (
    <>
      <div className="container">
        <h1>Select Location</h1>
        <input
          type="text"
          value={search}
          placeholder="Search location"
          className="col-md-3"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="col-md-3" onClick={getLocations}>
          Search Location
        </button>
      </div>

      {showLocations && (
        <div>
          <div>
            <div className="row">
              <label className="col-md-3" htmlFor="locations"></label>
              <select
                onChange={handleSelect}
                name="locations"
                id="locations"
                className="col-md-3"
              >
                <option value="" defaultValue="" disabled hidden>
                  Select a location in the list
                </option>
                {locations.map((item) => {
                  return (
                    <option value={item.id}>
                      {item.name}, {item.country}, {item.timezone}, Latitude:
                      {item.latitude}, Longitude: {item.longitude}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      )}

      <div>
        <DailyWeather
          key={city.id}
          city={city}
          getWeather={getWeather}
          weather={weather}
        />
      </div>
    </>
  );
};

export default LocationSelection;
