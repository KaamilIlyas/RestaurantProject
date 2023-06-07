import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";
import { useNavigate } from "react-router-dom";

const Items = (props) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="grid">
        <div className="grid-item">
          <div className="card">
            <img
              className="card-img"
              src={props.ipath}
              alt="sorry"
              onClick={() => {
                navigate("./cust/det");
              }}
            />
            <div className="card-content">
              <h1
                id="hname"
                onClick={() => {
                  navigate("/cust/det", { state: { props } });
                }}
              >
                {props.name}
              </h1>
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