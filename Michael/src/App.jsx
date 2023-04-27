import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import LocationSelection from "./components/LocationSelection";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";
import HistoricalWeather from "./components/HistoricalWeather";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import LocationTable from "./components/LocationTable";
import styles from "./components/LocationSelection.module.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [historicalWeather, setHistoricalWeather] = useState({});
  const [city, setCity] = useState(null);
  const [open, setOpen] = useState(false);
  const [tempUnitCheckbox, setTempUnitCheckbox] = useState(false);
  const [windspeedUnitCheckbox, setWindspeedUnitCheckbox] = useState(false);
  const [rainfallUnitCheckbox, setRainfallUnitCheckbox] = useState(false);
  const [dateFrom, setDateFrom] = useState("2022-10-01");
  const [dateTo, setDateTo] = useState("2023-04-22");

  const handleClick = () => {
    setOpen(true);
    getLocations();
  };

  const adjustDates = () => {
    getHistoricalWeather();
  };

  const toggleTempUnit = () => {
    setTempUnitCheckbox(!tempUnitCheckbox);
  };

  const toggleWindspeedUnit = () => {
    setWindspeedUnitCheckbox(!windspeedUnitCheckbox);
  };

  const toggleRainfallUnit = () => {
    setRainfallUnitCheckbox(!rainfallUnitCheckbox);
  };

  const getLocations = async () => {
    const url =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      search +
      "&count=10&language=en&format=json";
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

  // API getting the DAILY weather information for the selected city, based on latitude, longitude and timezone.
  // All weather parameters chosen are directly inside the URL address (ex: precipitation_sum)
  const getDailyWeather = async () => {
    // API url =
    // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&past_days=3&timezone=Europe%2FBerlin

    let tempUnitURL = tempUnitCheckbox ? "&temperature_unit=fahrenheit" : "";
    let windspeedUnitURL = windspeedUnitCheckbox ? "&windspeed_unit=kn" : "";
    let rainfallUnitURL = rainfallUnitCheckbox
      ? "&precipitation_unit=inch"
      : "";

    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&past_days=3" +
      tempUnitURL +
      rainfallUnitURL +
      windspeedUnitURL +
      "&timezone=" +
      city.timezone +
      "";

    // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=Asia%2FSingapore

    const res = await fetch(url);
    const data = await res.json();

    setWeather(data);
  };

  const getHourlyWeather = async () => {
    let tempUnitURL = tempUnitCheckbox ? "&temperature_unit=fahrenheit" : "";
    let windspeedUnitURL = windspeedUnitCheckbox ? "&windspeed_unit=kn" : "";
    let rainfallUnitURL = rainfallUnitCheckbox
      ? "&precipitation_unit=inch"
      : "";

    const url =
      // API address for reference
      // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,precipitation,surface_pressure,windspeed_10m,winddirection_10m,uv_index&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&past_days=14

      "https://api.open-meteo.com/v1/forecast?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&past_days=3" +
      tempUnitURL +
      rainfallUnitURL +
      windspeedUnitURL +
      "&hourly=temperature_2m,relativehumidity_2m,precipitation,surface_pressure,windspeed_10m,winddirection_10m,uv_index";
    const res = await fetch(url);
    const data = await res.json();

    // console.log("Hourly URL", url);
    // console.table("Hourly data", data.hourly);

    setHourlyWeather(data);
  };

  const getHistoricalWeather = async () => {
    let tempUnitURL = tempUnitCheckbox ? "&temperature_unit=fahrenheit" : "";
    let windspeedUnitURL = windspeedUnitCheckbox ? "&windspeed_unit=kn" : "";
    let rainfallUnitURL = rainfallUnitCheckbox
      ? "&precipitation_unit=inch"
      : "";

    const url =
      // API reference address
      // https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2022-10-01&end_date=2023-04-22&daily=weathercode,temperature_2m_max,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch

      "https://archive-api.open-meteo.com/v1/archive?latitude=" +
      city.latitude +
      "&longitude=" +
      city.longitude +
      "&start_date=" +
      dateFrom +
      "&end_date=" +
      dateTo +
      "&daily=weathercode,temperature_2m_max,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=" +
      city.timezone +
      tempUnitURL +
      rainfallUnitURL +
      windspeedUnitURL +
      "";
    const res = await fetch(url);
    const data = await res.json();

    console.log("Historical URL", url);

    console.table("Historical data", data.daily);

    setHistoricalWeather(data);
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

  useEffect(() => {
    if (city) {
      getHistoricalWeather();
    }
  }, [city]);

  return (
    <div>
      <div>
        {/* <img
          className="logo"
          width="100"
          src="./images/michaels_weatherLogo.png"
          alt=""
        /> */}
        <div className="container">
          <div className="container searchBar">
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
              </Button>
            </InputGroup>
          </div>
        </div>

        <Collapse in={open}>
          <div id="collapse-locations" className="container">
            <br />
            <h5> Select a location from below: </h5>
            <br />
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
            <br />
            <h5>Optional parameters:</h5>
            <br />

            <Form className="container">
              <Form.Check
                inline
                type="switch"
                id="custom-switch"
                label="Temperature units in Fahrenheit °F"
                defaultChecked={false}
                value={tempUnitCheckbox}
                onChange={toggleTempUnit}
              />
              <Form.Check
                inline
                type="switch"
                id="custom-switch"
                label="Wind speed in knots"
                defaultChecked={false}
                value={windspeedUnitCheckbox}
                onChange={toggleWindspeedUnit}
              />
              <Form.Check
                inline
                type="switch"
                id="custom-switch"
                label="Rainfall in inches"
                defaultChecked={false}
                value={rainfallUnitCheckbox}
                onChange={toggleRainfallUnit}
              />
            </Form>
          </div>
        </Collapse>
      </div>

      <div>
        {!open && <NavBar city={city} getDailyWeather={getDailyWeather} />}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Introduction
              locations={locations}
              city={city}
              weather={weather}
              hourlyWeather={hourlyWeather}
              historicalWeather={historicalWeather}
            />
          }
        />
        <Route
          path="/dailyweather"
          element={
            city &&
            weather && (
              <DailyWeather key={city.id} city={city} weather={weather} />
            )
          }
        />
        <Route
          path="/hourlyweather"
          element={
            city &&
            hourlyWeather && (
              <HourlyWeather
                key={city.id}
                city={city}
                hourlyWeather={hourlyWeather}
              />
            )
          }
        />
        <Route
          path="/historicalweather"
          element={
            city &&
            historicalWeather && (
              <HistoricalWeather
                key={city.id}
                city={city}
                historicalWeather={historicalWeather}
                setDateFrom={setDateFrom}
                setDateTo={setDateTo}
                dateTo={dateTo}
                dateFrom={dateFrom}
                adjustDates={adjustDates}
                getHistoricalWeather={getHistoricalWeather}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
