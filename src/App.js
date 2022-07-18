import './App.css'
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MapComp from "./components/Mmap";
// import NavbarComp from "./components/Navbar";

function App() {
  return (
    <MapComp></MapComp>
    // <div className="mainContainer">
    //   <div className="containerControls">
    //     <NavbarComp></NavbarComp>
    //   </div>
    //   <div className="containerMap">
    //     <MapComp></MapComp>
    //   </div>
    // </div>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<About />}/>
    //       <Route path="/map" element={<MapComp />}/>
    //       <Route path="/navbar" element={<NavbarComp />}/>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
