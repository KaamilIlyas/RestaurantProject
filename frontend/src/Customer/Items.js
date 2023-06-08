import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";
import { useNavigate } from "react-router-dom";

const Items = (props) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/ItemDetails", { state: { props } });
  };

  return (
    <>
      <div className="grid">
        <div className="grid-item">
          <div className="card" onClick={handleClick}>
            <img
              className="card-img"
              src={props.ipath}
              alt="sorry"
            />
            <div className="card-content">
              <h1 id="hname">{props.name}</h1>
              <h3 id="hprice"> RS: {props.price}</h3>
              <button className="card-btn" data-testid="atc_tid">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
