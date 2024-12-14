import React, { useState } from "react";
import "./Buttons.css";

export default function Buttons() {
  const [cat, setcat] = useState("overview");
  return (
    <div className="buttons">
      <button style={cat === "overview" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("overview")}}>Overview</button>
      <button style={cat === "weather" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("weather")}}>Weather</button>
      <button style={cat === "transportation" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("transportation")}}>Trasportation</button>
      <button style={cat === "news" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("news")}}>News & Events</button>
      <button style={cat === "sports" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("sports")}}>Sports</button>
      <button style={cat === "other" ? { backgroundColor: "blue", color: "white" } : {}} onClick={()=>{setcat("other")}}>Other</button>
    </div>
  );
}
