import React from "react";
import "./News.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
export default function News() {
  return (
    <div className="NewsContainer">
      <div className="newsmain">
        <img src={require("../assets/News-Chopper-6-crashes.webp")} alt="" />
        </div>
      <div className="newsside">
        <div className="newsfirst">
          <div className="newimg">
          </div>
          <img src={require("../assets/london.jpg")} alt="" />
        </div>
        <div className="newssecond">
          <div className="newimg"></div>
          <img src={require("../assets/paris.jpg")} alt="" />
        </div>
        <div className="newsthird">
          <div className="newimg"></div>
          <img src={require("../assets/london.jpg")} alt="" />
          
        </div>
      </div>
    </div>
  );
}
