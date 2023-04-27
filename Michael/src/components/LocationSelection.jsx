import React, { useState, useEffect, useRef } from "react";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import LocationTable from "./LocationTable";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import styles from "./LocationSelection.module.css";

const LocationSelection = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [weather, setWeather] = useState(null);
  // const [weather, setWeather] = useState({
  //   latitude: 52.52,
  //   longitude: 13.419998,
  //   generationtime_ms: 0.3409385681152344,
  //   utc_offset_seconds: 7200,
  //   timezone: "Europe/Berlin",
  //   timezone_abbreviation: "CEST",
  //   elevation: 46.0,
  //   daily_units: {
  //     time: "iso8601",
  //     weathercode: "wmo code",
  //     temperature_2m_max: "°C",
  //     temperature_2m_min: "°C",
  //     sunrise: "iso8601",
  //     sunset: "iso8601",
  //     uv_index_max: "",
  //     precipitation_sum: "mm",
  //     windspeed_10m_max: "km/h",
  //   },
  //   daily: {
  //     time: [
  //       "2023-04-21",
  //       "2023-04-22",
  //       "2023-04-23",
  //       "2023-04-24",
  //       "2023-04-25",
  //       "2023-04-26",
  //       "2023-04-27",
  //       "2023-04-28",
  //       "2023-04-29",
  //       "2023-04-30",
  //     ],
  //     weathercode: [1, 3, 61, 80, 61, 3, 3, 80, 3, 95],
  //     temperature_2m_max: [
  //       20.0, 22.1, 17.0, 16.9, 9.7, 10.4, 13.4, 14.8, 18.3, 21.3,
  //     ],
  //     temperature_2m_min: [8.4, 8.5, 12.6, 9.0, 5.8, 2.4, 3.0, 7.3, 10.3, 11.1],
  //     sunrise: [
  //       "2023-04-21T05:53",
  //       "2023-04-22T05:51",
  //       "2023-04-23T05:49",
  //       "2023-04-24T05:47",
  //       "2023-04-25T05:45",
  //       "2023-04-26T05:43",
  //       "2023-04-27T05:41",
  //       "2023-04-28T05:39",
  //       "2023-04-29T05:37",
  //       "2023-04-30T05:35",
  //     ],
  //     sunset: [
  //       "2023-04-21T20:16",
  //       "2023-04-22T20:18",
  //       "2023-04-23T20:19",
  //       "2023-04-24T20:21",
  //       "2023-04-25T20:23",
  //       "2023-04-26T20:25",
  //       "2023-04-27T20:26",
  //       "2023-04-28T20:28",
  //       "2023-04-29T20:30",
  //       "2023-04-30T20:32",
  //     ],
  //     uv_index_max: [5.45, 5.55, 4.0, 5.0, 3.6, 4.7, 4.4, 3.95, 3.05, 5.25],
  //     precipitation_sum: [0.0, 0.0, 2.9, 0.1, 0.2, 0.0, 0.0, 6.9, 0.3, 2.1],
  //     windspeed_10m_max: [
  //       17.4, 14.2, 12.4, 22.2, 22.6, 16.3, 11.9, 15.0, 6.6, 11.2,
  //     ],
  //   },
  // });
  const [hourlyWeather, setHourlyWeather] = useState({
    latitude: 45.74,
    longitude: 4.8399997,
    generationtime_ms: 0.17893314361572266,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 175.0,
    hourly_units: {
      time: "iso8601",
      temperature_2m: "°C",
      precipitation: "mm",
    },
    hourly: {
      time: [
        "2023-04-26T00:00",
        "2023-04-26T01:00",
        "2023-04-26T02:00",
        "2023-04-26T03:00",
        "2023-04-26T04:00",
        "2023-04-26T05:00",
        "2023-04-26T06:00",
        "2023-04-26T07:00",
        "2023-04-26T08:00",
        "2023-04-26T09:00",
        "2023-04-26T10:00",
        "2023-04-26T11:00",
        "2023-04-26T12:00",
        "2023-04-26T13:00",
        "2023-04-26T14:00",
        "2023-04-26T15:00",
        "2023-04-26T16:00",
        "2023-04-26T17:00",
        "2023-04-26T18:00",
        "2023-04-26T19:00",
        "2023-04-26T20:00",
        "2023-04-26T21:00",
        "2023-04-26T22:00",
        "2023-04-26T23:00",
        "2023-04-27T00:00",
        "2023-04-27T01:00",
        "2023-04-27T02:00",
        "2023-04-27T03:00",
        "2023-04-27T04:00",
        "2023-04-27T05:00",
        "2023-04-27T06:00",
        "2023-04-27T07:00",
        "2023-04-27T08:00",
        "2023-04-27T09:00",
        "2023-04-27T10:00",
        "2023-04-27T11:00",
        "2023-04-27T12:00",
        "2023-04-27T13:00",
        "2023-04-27T14:00",
        "2023-04-27T15:00",
        "2023-04-27T16:00",
        "2023-04-27T17:00",
        "2023-04-27T18:00",
        "2023-04-27T19:00",
        "2023-04-27T20:00",
        "2023-04-27T21:00",
        "2023-04-27T22:00",
        "2023-04-27T23:00",
        "2023-04-28T00:00",
        "2023-04-28T01:00",
        "2023-04-28T02:00",
        "2023-04-28T03:00",
        "2023-04-28T04:00",
        "2023-04-28T05:00",
        "2023-04-28T06:00",
        "2023-04-28T07:00",
        "2023-04-28T08:00",
        "2023-04-28T09:00",
        "2023-04-28T10:00",
        "2023-04-28T11:00",
        "2023-04-28T12:00",
        "2023-04-28T13:00",
        "2023-04-28T14:00",
        "2023-04-28T15:00",
        "2023-04-28T16:00",
        "2023-04-28T17:00",
        "2023-04-28T18:00",
        "2023-04-28T19:00",
        "2023-04-28T20:00",
        "2023-04-28T21:00",
        "2023-04-28T22:00",
        "2023-04-28T23:00",
        "2023-04-29T00:00",
        "2023-04-29T01:00",
        "2023-04-29T02:00",
        "2023-04-29T03:00",
        "2023-04-29T04:00",
        "2023-04-29T05:00",
        "2023-04-29T06:00",
        "2023-04-29T07:00",
        "2023-04-29T08:00",
        "2023-04-29T09:00",
        "2023-04-29T10:00",
        "2023-04-29T11:00",
        "2023-04-29T12:00",
        "2023-04-29T13:00",
        "2023-04-29T14:00",
        "2023-04-29T15:00",
        "2023-04-29T16:00",
        "2023-04-29T17:00",
        "2023-04-29T18:00",
        "2023-04-29T19:00",
        "2023-04-29T20:00",
        "2023-04-29T21:00",
        "2023-04-29T22:00",
        "2023-04-29T23:00",
        "2023-04-30T00:00",
        "2023-04-30T01:00",
        "2023-04-30T02:00",
        "2023-04-30T03:00",
        "2023-04-30T04:00",
        "2023-04-30T05:00",
        "2023-04-30T06:00",
        "2023-04-30T07:00",
        "2023-04-30T08:00",
        "2023-04-30T09:00",
        "2023-04-30T10:00",
        "2023-04-30T11:00",
        "2023-04-30T12:00",
        "2023-04-30T13:00",
        "2023-04-30T14:00",
        "2023-04-30T15:00",
        "2023-04-30T16:00",
        "2023-04-30T17:00",
        "2023-04-30T18:00",
        "2023-04-30T19:00",
        "2023-04-30T20:00",
        "2023-04-30T21:00",
        "2023-04-30T22:00",
        "2023-04-30T23:00",
        "2023-05-01T00:00",
        "2023-05-01T01:00",
        "2023-05-01T02:00",
        "2023-05-01T03:00",
        "2023-05-01T04:00",
        "2023-05-01T05:00",
        "2023-05-01T06:00",
        "2023-05-01T07:00",
        "2023-05-01T08:00",
        "2023-05-01T09:00",
        "2023-05-01T10:00",
        "2023-05-01T11:00",
        "2023-05-01T12:00",
        "2023-05-01T13:00",
        "2023-05-01T14:00",
        "2023-05-01T15:00",
        "2023-05-01T16:00",
        "2023-05-01T17:00",
        "2023-05-01T18:00",
        "2023-05-01T19:00",
        "2023-05-01T20:00",
        "2023-05-01T21:00",
        "2023-05-01T22:00",
        "2023-05-01T23:00",
        "2023-05-02T00:00",
        "2023-05-02T01:00",
        "2023-05-02T02:00",
        "2023-05-02T03:00",
        "2023-05-02T04:00",
        "2023-05-02T05:00",
        "2023-05-02T06:00",
        "2023-05-02T07:00",
        "2023-05-02T08:00",
        "2023-05-02T09:00",
        "2023-05-02T10:00",
        "2023-05-02T11:00",
        "2023-05-02T12:00",
        "2023-05-02T13:00",
        "2023-05-02T14:00",
        "2023-05-02T15:00",
        "2023-05-02T16:00",
        "2023-05-02T17:00",
        "2023-05-02T18:00",
        "2023-05-02T19:00",
        "2023-05-02T20:00",
        "2023-05-02T21:00",
        "2023-05-02T22:00",
        "2023-05-02T23:00",
      ],
      temperature_2m: [
        9.5, 9.4, 8.5, 7.3, 7.0, 6.6, 7.1, 8.1, 9.7, 11.8, 14.0, 15.7, 16.8,
        17.6, 17.8, 17.9, 17.7, 17.3, 16.7, 15.9, 15.3, 14.0, 13.6, 13.0, 12.7,
        12.2, 11.9, 11.7, 11.1, 10.3, 10.4, 11.5, 13.2, 15.0, 16.4, 18.2, 17.6,
        17.2, 16.9, 16.3, 15.7, 15.3, 15.1, 14.9, 14.6, 14.5, 14.5, 14.3, 14.2,
        14.1, 13.7, 13.6, 13.8, 13.5, 14.0, 15.2, 17.3, 19.2, 20.9, 22.5, 23.9,
        24.6, 22.7, 21.5, 20.8, 20.7, 19.9, 19.0, 18.0, 17.1, 16.7, 16.5, 16.3,
        16.1, 15.9, 15.7, 15.6, 15.4, 15.7, 16.0, 16.4, 17.1, 17.7, 18.4, 19.2,
        20.0, 20.8, 21.3, 21.0, 20.3, 19.2, 18.4, 17.5, 16.5, 16.1, 15.9, 15.6,
        15.3, 14.9, 14.5, 14.1, 13.7, 13.4, 13.6, 14.0, 14.9, 16.2, 17.9, 19.4,
        19.4, 18.9, 17.9, 17.3, 16.7, 15.9, 15.4, 15.1, 14.6, 14.3, 13.9, 13.6,
        13.5, 13.2, 12.9, 12.7, 12.5, 12.6, 13.1, 13.8, 14.8, 15.5, 16.2, 17.0,
        17.4, 17.7, 17.7, 17.1, 16.2, 15.1, 14.5, 14.0, 13.4, 13.1, 12.9, 12.7,
        12.5, 12.3, 12.1, 12.0, 11.9, 12.2, 12.9, 14.0, 15.3, 16.3, 17.3, 18.3,
        18.6, 18.7, 18.5, 18.1, 17.5, 16.6, 15.7, 14.7, 13.5, 13.0, 12.7,
      ],
      precipitation: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.8, 0.5, 0.7, 0.4, 0.3,
        0.2, 0.1, 0.4, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.4, 0.1, 0.0, 0.0, 0.0, 0.0, 0.1,
        0.4, 0.9, 1.0, 0.5, 0.4, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2,
        0.2, 0.2, 0.3, 0.3, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1,
        0.2, 0.2, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.2, 0.2, 0.3, 0.3,
        0.3, 0.4, 0.4, 0.4, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.7, 0.7, 0.7, 0.1,
        0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
    },
  });

  const [city, setCity] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    getLocations();
  };

  const getLocations = async () => {
    const url =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      search +
      "&count=5&language=en&format=json";
    const res = await fetch(url);
    const data = await res.json();
    setLocations(data.results);
    setSearch("");
  };

  const handleSelect = (id, lat, lng, flagSrc) => {
    // Collapse the locations table
    setOpen(!open);
    // Get the selected city's information from the Locations state variable
    const selectedCity = locations.find((location) => location.id == id);
    // Update the City state variable with the selected city's comprehensive information, to be proppped down to teh various weather display components
    setCity({
      name: selectedCity.name,
      latitude: selectedCity.latitude,
      latitudeDMS: lat,
      longitude: selectedCity.longitude,
      longitudeDMS: lng,
      flagSrc: flagSrc,
      timezone: selectedCity.timezone,
      country: selectedCity.country,
      countryCode: selectedCity.country_code,
      countryId: selectedCity.country_id,
      elevation: selectedCity.elevation,
      population: selectedCity.population,
    });
  };

  // Not in use
  const getCity = async (id) => {
    const url = "https://geocoding-api.open-meteo.com/v1/get?id=" + id;
    const res = await fetch(url);
    const data = await res.json();
    setCity(data);
    setShowLocations(false);
  };

  // API getting the DAILY weather information for the selected city, based on latitude, longitude and timezone.
  // All weather parameters chosen are directly inside the URL address (ex: precipitation_sum)
  const getDailyWeather = async () => {
    // const url =
    //   "https://api.open-meteo.com/v1/forecast?latitude=" +
    //   city.latitude +
    //   "&longitude=" +
    //   city.longitude +
    //   "&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max&past_days=3&timezone=" +
    //   city.timezone +
    //   "";
    let fahrenheitURL = "";

    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max&past_days=3" +
      fahrenheitURL +
      "&timezone=" +
      city.timezone +
      "";

    // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=Asia%2FSingapore

    const res = await fetch(url);
    const data = await res.json();

    setWeather(data);
  };

  const getHourlyWeather = async () => {
    const url =
      // "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=3&hourly=temperature_2m,precipitation"
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&past_days=3&hourly=temperature_2m,precipitation";
    const res = await fetch(url);
    const data = await res.json();

    console.log("Hourly URL", url);

    console.table("Hourly data", data.hourly);

    setHourlyWeather(data);
  };

  useEffect(() => {
    if (open) {
      getLocations();
    }
  }, [open]);

  useEffect(() => {
    if (city) {
      getDailyWeather();
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      getHourlyWeather();
    }
  }, [city]);

  return (
    <>
      <div className="container">
        <h1>Select Location</h1>
        <div className="container">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Search a location
            </InputGroup.Text>
            <Form.Control
              placeholder="ex: Berlin"
              aria-label="Location"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              onClick={handleClick}
              variant="secondary"
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Search
            </Button>{" "}
          </InputGroup>
        </div>
      </div>

      <div className="container">
        <Form className="container">
          <Form.Check
            inline
            type="switch"
            id="custom-switch"
            label="Temperature units in Fahrenheit °F"
            defaultChecked={false}
          />
          <Form.Check
            inline
            type="switch"
            id="custom-switch"
            label="Wind speed in knots"
          />
          <Form.Check
            inline
            type="switch"
            id="custom-switch"
            label="Rainfall in inches"
          />
        </Form>
      </div>

      <Collapse in={open}>
        <div id="collapse-locations" className="container">
          {locations.map((item, index) => {
            return (
              <LocationTable
                key={item.id}
                id={item.id}
                index={index}
                name={item.name}
                country={item.country}
                countryCode={item.country_code}
                latitude={item.latitude}
                longitude={item.longitude}
                timezone={item.timezone}
                handleSelect={handleSelect}
              />
            );
          })}
        </div>
      </Collapse>
      <div>
        {city && weather && (
          <DailyWeather key={city.id} city={city} weather={weather} />
        )}
      </div>
      <div>
        {city && hourlyWeather && (
          <HourlyWeather
            key={city.id}
            city={city}
            hourlyWeather={hourlyWeather}
          />
        )}
      </div>
    </>
  );
};

export default LocationSelection;
