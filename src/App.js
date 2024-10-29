import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideDisplay from './components/Side/sideDisplay.js';
import MainRouter from './components/routes/mainRouter.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
          
          <SideDisplay />

          <MainRouter />

      </BrowserRouter>


    </div>
  );
}

export default App;
