import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/IDetails.css";
// import Dtems from "../Dishes";
import { Link, useLocation } from "react-router-dom";
import ItemComments from "./ItemComments";
const ItemDetails = () => {
  const { state } = useLocation();
  let props = state.props;
  return (
    <>
      <div id="product">
        <div className="product_images">
          <img src={props.ipath} alt="Img not found Error 69" />
        </div>
        <div className="product_details">
          <div className="back">
            <span className="material-symbols-outlined">chevron_left</span>
            <h6>
              Back to <Link to={-1}>Menu</Link>
            </h6>
          </div>

          <h1>{props.name}</h1>
          <h3>${props.price}</h3>

          <div className="about">
            <p>
              Availability :<span>TRUE</span>
            </p>
            <p>
              Product Id : <span>#4657</span>
            </p>
            <p>
              Tags : <span>#Food, #Taste, #Food_Lover</span>
            </p>
          </div>

          <p>{props.des}</p>
          <h4>Ingredients</h4>
          <ul>
            <li>unknown</li>
            <li>unknown</li>
            <li>unknown</li>
            <li>unknown</li>
          </ul>

          <Link href="">Clear Selection</Link>

          <div className="cta">
            <div className="btn btn_primary">add to cart</div>
            <div className="btn btn_outline_secondary">
              <span className="material-symbols-outlined">favorite</span>add to
              wishlist
            </div>
          </div>
        </div>
      </div>
      <ItemComments />
    </>
  );
};

export default ItemDetails;