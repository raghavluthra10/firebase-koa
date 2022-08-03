// import { useEffect, useState } from "react";

import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guest from "./pages/Guest";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/guest" element={<Guest />} />
      </Routes>
    </div>
  );
}

export default App;
