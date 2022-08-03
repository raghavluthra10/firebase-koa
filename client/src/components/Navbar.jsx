import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { If } from "./If";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  height: 56px;
  background-color: black;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 32px;
  }
`;

const Navbar = ({ isUserLoggedIn }) => {
  console.log(isUserLoggedIn);
  const logoutFromFirebase = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Nav>
      <Pages>
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/guest">
          <span>Guest</span>
        </Link>
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </Pages>
      <div>
        <If condition={isUserLoggedIn}>
          <button onClick={logoutFromFirebase}>logout</button>
        </If>
      </div>
    </Nav>
  );
};

export default Navbar;
