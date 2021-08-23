import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58998f2f1d96bf70dbdd7f7a20868eb4&&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city..."
          onChange={updateCity}
          className="text-box"
        />
        <input className="submit-button" type="submit" />
      </form>
      <div className="text">Temperature: {temperature} °C</div>
      <div className="text">Description: {description}</div>
      <div className="text">Humidity: {humidity}% </div>
      <div className="text">Wind: {wind} km/h </div>
      <img src={icon} alt="Weather Icon" />
    </div>
  );
}
