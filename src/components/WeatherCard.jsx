import React from "react";
import "./WeatherCard.css"
export default function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="left">
        <div className="cityName">
          <img src={require("../assets/location-pointer.png")} alt="" />
          <h3>LONDON</h3>
        </div>
        <div className="weather">
            <div className="temp">
            <p>25°</p>
            <img src={require("../assets/cloudy.png")} alt="" />
            </div>
            <div className="city">
            <h2>London, Haze</h2>
            <h1>Good Morning!</h1>
            </div>
        </div>
      </div>
      <div className="right">
        <div className="searchbar">
            <input type="text" placeholder="Search Location..."/>
            <img src={require("../assets/search.png")} alt="" />
        </div>
        <div className="time">
            <h1>08:44:56</h1>
            <h3>Saturday, 14th September</h3>
        </div>
      </div>
    </div>
  );
}