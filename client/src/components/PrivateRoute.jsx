import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, Route, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PrivateRoute;
