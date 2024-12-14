import React from 'react'
import "./CurrentWeather.css"
import { RiCelsiusFill } from "react-icons/ri";
import { BsFillCloudSunFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherStormy } from "react-icons/ti";
import { CiCloudOn } from "react-icons/ci";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
export default function CurrentWeather() {
  return (
    <div className='currentContainer'>
      <h2>Current Weather</h2>
      <div className='temp'>25 <RiCelsiusFill /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <p className='subtext'>Sunday <br /><IoLocationSharp />Lucknow </p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require("../assets/cloudy.png")} className='clouds' alt="" /></div>
      <div className='days'>
          <div className='day'>48<RiCelsiusFill /> <br /><TiWeatherPartlySunny /><br />Fri <br /> <br />12:00</div>
          <div className='day'>48<RiCelsiusFill /> <br /><TiWeatherStormy /><br />Sat<br /><br /> 12:00</div>
          <div className='day'>48<RiCelsiusFill /> <br /><CiCloudOn /><br />Sun<br /> <br />12:00</div>
          <div className='day'>48<RiCelsiusFill /> <br /><FaCloudShowersHeavy /><br />Mon<br /> <br />12:00</div>
          <div className='day'>48<RiCelsiusFill /> <br /><MdOutlineWbSunny />
<br />Tue<br /> <br />12:00</div>
      </div>
    </div>
  )
}
