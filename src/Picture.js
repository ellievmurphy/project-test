import React from "react";

export default function Picture(props) {
  let temp = props.temp;
  if (temp) {
    return <img src={props.icon} alt="Weather icon" />;
  } else {
    return <span></span>;
  }
}
