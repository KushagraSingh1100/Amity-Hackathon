import React from 'react'
import "./AirQuality.css"
export default function AirQuality() {
  return (
    <div className='airContainer'>
     <div className='subtitle'>
      <h2>Air Quality Meter</h2>
      View Details
      </div>
     <p>London Published at PM 11:00 </p>
     <div className='about'>
     <img src={require("../assets/WhatsApp Image 2024-12-14 at 14.27.25_782f8464.jpg")}  className="img" />
     <div className='info'><h2>Good <progress value="75" max="100">45%</progress></h2>
     <p>Air Quality is poor . You will probably die</p></div>
     
     </div>
     <div className='info'>
      <h2>15.4 <br/>PM 2.5r</h2>
      <h2>15.4 <br/>PM 10r</h2>
      <h2>15.4 <br/>C02r</h2>
     </div>
          
      
    </div>
  )
}
