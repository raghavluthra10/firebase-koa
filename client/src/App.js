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
import { If } from "./components/If";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setCurrentUser(user);
    } else {
      console.log("user is signed out");
    }
  });

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/#/signup" element={<Signup />} />
        <Route exact path="/#/login" element={<Login />} />
        <Route exact path="/#/" element={<Guest />} />
        {/* <PrivateRoute exact path="/home" element={<Home />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/#/home" exact element={<Home />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App;
