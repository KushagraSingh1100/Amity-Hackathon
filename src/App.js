import React from "react";
import WeatherCard from "./components/WeatherCard";
import Buttons from "./components/Buttons";
import News from "./components/News";
import CurrentWeather from "./components/CurrentWeather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AirQuality from "./components/AirQuality";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherCard />} />
      </Routes>
      <>
        <Buttons></Buttons>
        <div className="cards">
          <div className="two">
          <News />
          <CurrentWeather />
          </div>
        </div>
        <AirQuality/>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
