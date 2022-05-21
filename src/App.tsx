import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './components/loginPage/loginPage'
import InfoPage from './components/infoPage/infoPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/info" element={<InfoPage/>}/>
      </Routes>
  </div>
  );
}

export default App;
