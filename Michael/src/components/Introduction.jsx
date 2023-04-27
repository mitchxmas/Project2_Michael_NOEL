import React from "react";
import { Accordion, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Introduction = (props) => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      {props.city &&
        props.weather &&
        props.hourlyWeather &&
        props.historicalWeather && (
          <ListGroup>
            <ListGroup.Item variant="light">
              Weather reports are ready for :{" "}
              <img width="20" src={props.city.flagSrc}></img> {props.city.name},{" "}
              {props.city.countryCode}, {props.city.latitudeDMS},{" "}
              {props.city.longitudeDMS}, , Timezone:
              {props.city.timezone}
            </ListGroup.Item>
          </ListGroup>
        )}

      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>General</Accordion.Header>
          <Accordion.Body>
            Welcome to Michael's weather app. <br />
            Please search a location. The app will return a list of potential
            cities based on your criteria. The WeatherApp uses Open-Meteo
            sources which combines local (1 km resolution) and global (11 km)
            weather models from national weather services. For every location on
            earth, the best forecast is available. National weather services
            include Deutscher Wetter Dienst (DWD), National Oceanic and
            Atmospheric Administration (NOAA), Meteofrance and Canadian
            Meteorological Center (CMC).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About daily weather</Accordion.Header>
          <Accordion.Body>
            Navigate to Daily Weather to get a snapshot of today's weather and
            up to 7 days ahead next 6 days. <br />
            Open-Meteo APIs select the highest resolution weather model for your
            location. For locations in Europe and the US, 2 km high resolution
            models are used. Weather data are provided in hourly resolution with
            7 days forecast. Typically, the first 2-3 days hours are calculated
            with high resolution weather models, followed by global weather
            models up to 180 hours. Our APIs integrate data seamlessly to offer
            a simple hourly 7-day forecast.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>About hourly Weather</Accordion.Header>
          <Accordion.Body>
            Navigate to the Hourly Weather page to visualize temperature and
            rainfall hour by hour for your chosen location. <br />
            To continuously correct weather forecasts, Open-Meteo's local 1 km
            resolution models update every hour. Open-Meteo forecasts are always
            up to date. Weather models use real-time measurements, airplane
            data, buoys, rain radar and satellite observations for numerical
            weather predictions.
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>About historical data</Accordion.Header>
          <Accordion.Body>
            Navigate to the Historical data page to access historical records.
            <br />
            The Historical Weather API is based on reanalysis datasets and uses
            a combination of weather station, aircraft, buoy, radar, and
            satellite observations to create a comprehensive record of past
            weather conditions. These datasets are able to fill in gaps by using
            mathematical models to estimate the values of various weather
            variables. As a result, reanalysis datasets are able to provide
            detailed historical weather information for locations that may not
            have had weather stations nearby, such as rural areas or the open
            ocean. <br />
            You can access data dating back to 1940 with a delay of 5 days.
            <br />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Introduction;
