import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Album from "./component/album.js";
import ClockDisplay from './component/clockDisplay.js';
import './home.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Album />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

function Home() {
  return (
    <div className='header-album'>
      <div className="div-head-text">
        <h1 className="App-header">Gate Keeper</h1>
      </div>
      <div className="content-container">
        <div className="clock-container">
          <ClockDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
