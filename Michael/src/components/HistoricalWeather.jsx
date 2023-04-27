import React from "react";
import HistoricalWeatherCharts from "./HistoricalWeatherCharts";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const HistoricalWeather = (props) => {
  console.log("dateFrom", props.dateFrom);
  console.log("dateTo", props.dateTo);

  useEffect(() => {
    props.getHistoricalWeather();
  }, [props.dateFrom]);

  useEffect(() => {
    props.getHistoricalWeather();
  }, [props.dateTo]);

  return (
    <div className="container">
      <br />
      <h3>Historical Weather</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Date from:</InputGroup.Text>
        <Form.Control
          type="date"
          placeholder="DD-MM-YYYY"
          aria-label="Date from"
          aria-describedby="basic-addon1"
          value={props.dateFrom}
          onChange={(event) => props.setDateFrom(event.target.value)}
        />
        <InputGroup.Text id="basic-addon1">Date To:</InputGroup.Text>
        <Form.Control
          type="date"
          placeholder="DD-MM-YYYY"
          aria-label="Date to"
          aria-describedby="basic-addon1"
          value={props.dateTo}
          onChange={(event) => props.setDateTo(event.target.value)}
        />
        <Button onClick={props.adjustDates} variant="secondary">
          OK
        </Button>
      </InputGroup>
      <HistoricalWeatherCharts
        historicalWeather={props.historicalWeather}
        dateTo={props.dateTo}
        dateFrom={props.dateFrom}
      />
    </div>
  );
};

export default HistoricalWeather;
