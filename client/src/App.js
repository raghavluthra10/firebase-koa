// import { useEffect, useState } from "react";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guest from "./pages/Guest";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  console.log(currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCurrentUser(uid);
      console.log("user is logged in", currentUser);
    } else {
      console.log("user is signed out");
    }
  });

  return (
    <div className="">
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/guest" element={<Guest />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
