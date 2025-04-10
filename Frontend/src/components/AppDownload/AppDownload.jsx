import React from "react";
import "./AppDownload.css";
import playStore from "../../assets/play_store.png"; 
import appStore from "../../assets/app_store.png";  
import foodImage from "../../assets/food.jpg"; 

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <div className="app-download-details">
        <p>🚀 Download <strong> Onifood App</strong> for a better experience.<br/>Order food in just a few taps! 🍽️🍔</p>
        <div className="app-download-platforms">
          <img src={playStore} alt="Download from Play Store" />
          <img src={appStore} alt="Download from App Store" />
        </div>
      </div>
      <div className="app-download-image">
        <img src={foodImage} alt="Delicious Food" /> 
      </div>
    </div>
  );
};

export default AppDownload;
