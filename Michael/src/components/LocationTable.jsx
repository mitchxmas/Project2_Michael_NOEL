import React from "react";
import styles from "./LocationTable.module.css";
import ListGroup from "react-bootstrap/ListGroup";

const LocationTable = (props) => {
  // This section is to add some styling to the displayed location rows: alternating light grey / dark grey
  let rowStyle = "";
  if (props.index % 2 == 0) {
    rowStyle = "light";
  } else if (props.index % 2 !== 0) {
    rowStyle = "dark";
  }

  // This function converts decimal latitude into degrees, minutes and seconds (rounded) and adds N, S
  function convertLatDMS(lat) {
    let latDeg = Math.floor(Math.abs(lat)); // get the degree
    let latMin = Math.floor((Math.abs(lat) - latDeg) * 60); // get the minute
    let latSec = ((Math.abs(lat) - latDeg - latMin / 60) * 3600).toFixed(0); // get the second
    let latDir = lat >= 0 ? "N" : "S"; // get the direction letter
    return `${latDeg}° ${latMin}' ${latSec}" ${latDir}`;
  }
  const lat = convertLatDMS(props.latitude);

  // This function converts decimal longitude into degrees, minutes and seconds (rounded) and adds E, W
  function convertLongDMS(lng) {
    let lngDeg = Math.floor(Math.abs(lng)); // get the degree
    let lngMin = Math.floor((Math.abs(lng) - lngDeg) * 60); // get the minute
    let lngSec = ((Math.abs(lng) - lngDeg - lngMin / 60) * 3600).toFixed(0); // get the second
    let lngDir = lng >= 0 ? "E" : "W"; // get the direction letter
    return `${lngDeg}° ${lngMin}' ${lngSec}" ${lngDir}`;
  }
  const lng = convertLongDMS(props.longitude);

  // This section uses the 2 letter country code to retrieve the corresponding flag from a free online github repo to add teh counrty flag to each location
  const lowCaseCountryCode = props.countryCode.toLowerCase();
  const flagSrc = `https://hatscripts.github.io/circle-flags/flags/${lowCaseCountryCode}.svg`;

  return (
    <>
      <ListGroup>
        <ListGroup.Item
          variant={rowStyle}
          action
          onClick={() => props.handleSelect(props.id, lat, lng, flagSrc)}
        >
          <img width="25" src={flagSrc}></img> {props.name}, {props.countryCode}
          , {lat}, {lng} , Timezone:
          {props.timezone}
        </ListGroup.Item>
      </ListGroup>
    </>

    // <>
    //   <div className={`row ${styles.location}`}>
    //     <div className="col-sm-2">{props.name}</div>
    //     <div className="col-sm-2">{props.country}</div>
    //     <div className="col-sm-2">{props.latitude}</div>
    //     <div className="col-sm-2">{props.longitude}</div>
    //     <div className="col-sm-2">{props.timezone}</div>
    //     <img src={flagSrc} className={styles.flagicon} width="10" />
    //     <button
    //       className={`col-sm-2 ${styles.btn}`}
    //       onClick={() => props.handleSelect(props.id)}
    //     >
    //       Select
    //     </button>
    //   </div>
    // </>
  );
};
export default LocationTable;
