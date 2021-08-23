import React from "react";
import SearchEngine from "./SearchEngine";

import "./Body.css";

export default function Body() {
  return (
    <div className="weather-wrap">
      <div className="weather-app">
        <h1>Welcome to the Weather Forecaster!</h1>
        <SearchEngine />
      </div>
    </div>
  );
}
