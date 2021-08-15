import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {}

  let apiKey = "58998f2f1d96bf70dbdd7f7a20868eb4";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&&units=metric`;

  return (
    <div>
      <h2>Hello from Weather</h2>
    </div>
  );
}
