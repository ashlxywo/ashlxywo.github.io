import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import Jar from './Pages/Jar/Jar';

function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/jar" element={<Jar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;