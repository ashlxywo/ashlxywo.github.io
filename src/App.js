import './App.css';
import React from "react";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import Projects from './Pages/Home/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;