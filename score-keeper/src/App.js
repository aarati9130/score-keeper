import {useState, useEffect} from "react";

import ImgBasketball from"../src/basketball.gif";

import "./App.css";
function App() {
  return (
    
        <>
        <div className="score-keeper-container">
         <img src={ImgBasketball} className="img-basket"/>
         <h2 className="score-keeper-heding">Basketball Score Keeper</h2>
         <div className="score-card-container">
          <div className="score-card">
            <h3 className="score-card-heading">Team A</h3>
            <h6 className="score-count">0</h6>
          </div>
          <div className="score-card">
            <h3 className="score-card-heading">Team B</h3>
            <h6 className="score-count">0</h6>
            </div>
         </div>
         </div>
        </>
        
  );
}

export default App;
