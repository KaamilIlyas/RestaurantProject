import React from "react";
import "../style/Footer.css";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <>
      <div id="full">
        <span className="container">
          <div className="col1">
            <img src={logo} width="200px" alt="pic not found" />
          </div>

          <div className="col2">
            <h1>ABOUT US</h1>
            <p>
              The Hidden Witch <br />
              Indulge in enchanting flavors at "The Hidden Witch" 
              where culinary magic meets your taste buds.”
            </p>
          </div>

          <div className="col3">
            <h1>CONTACT</h1>
            <p>Rawalpindi, Defence Colony, KRL road</p>
          </div>

          <div className="col4">
            <h1>PHONE#</h1>
            <ul>
              <li>03163245234</li>
              <li>03098756434</li>
              <li>03017385563</li>
            </ul>
          </div>

          <div className="col5">
            <h1>DEVELOPERS</h1>
            <ul>
              <li>Kamil Ilyas</li>
              <li>Khwaja Razzi</li>
              <li>Areeb Ahmed</li>
            </ul>
          </div>
        </span>

        <hr />

        <div className="copy">
          <p>Copyright 2023 - Web Programming</p>
        </div>
      </div>
    </>
  );
};

export default Footer;