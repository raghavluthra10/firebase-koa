import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Navbar = () => {
  return (
    <Nav>
      <Pages>
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/guest">
          <span>Guest</span>
        </Link>
      </Pages>
      <div></div>
    </Nav>
  );
};

export default Navbar;
