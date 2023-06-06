import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navid">
        <ul className="navitems">
          <li>
            <img id="logo" src={logo} alt="" />
          </li>
          <li>
            <NavLink to="Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="Menu">Menu</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;