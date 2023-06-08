import React from "react";
import vid from "../images/vid.mp4";
import "../style/Main_vid.css";
const Main = () => {
  return (
    <>
      <div class="textC">
        <h1> </h1>
        <h1> </h1>
        <h1>Welcome To The</h1>
        <h1>Hidden Witch</h1>
        <h1>Restaurant</h1>
      </div>

      <div className="main">
        <video src={vid} autoPlay loop muted />
      </div>

    </>
  );
};

export default Main;