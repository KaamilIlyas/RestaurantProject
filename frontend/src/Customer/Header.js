import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Cust_Nav.css";
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
            <NavLink to="Signup">register</NavLink>
          </li>
          {/* <li>
            <NavLink to="Login">Login</NavLink>
          </li> */}
          <li>
            <NavLink to="Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="Menu">Menu</NavLink>
          </li>
          {/* <li>
            <NavLink to="lol">Offers</NavLink>
          </li> */}
          <li>
            <NavLink to="Feedback">Feedback</NavLink>
          </li>
          <li>
            <NavLink to="ItemComments">ItemComments</NavLink>
          </li>
          {/* <li>
            <NavLink to="ItemDetails">ItemDetails</NavLink>
          </li> */}

        </ul>
      </div>
    </>
  );
};

export default Header;