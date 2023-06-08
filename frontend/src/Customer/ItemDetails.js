import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/IDetails.css";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemComments from "./ItemComments";

const ItemDetails = () => {
  const { state } = useLocation();
  let props = state?.props;

  const [showComments, setShowComments] = useState(false);

  if (!props) {
    return <div>Loading...</div>;
  }

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addToCart = () => {
    toast.success("Item has been added to the cart");
  };

  const addToWishlist = () => {
    toast.success("Item has been added to the wishlist");
  };

  return (
    <>
      <div id="product">
        <div className="product_images">
          <img src={props.ipath} alt="Img not found Error " />
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

          <div className="cta">
            <div className="btn btn_primary" onClick={addToCart}>
              Add to Cart
            </div>
            <div className="btn btn_outline_secondary" onClick={addToWishlist}>
              <span className="material-symbols-outlined">favorite</span>
              Add to Wishlist
            </div>
          </div>

          <div className="comments-button">
            <button className="btn btn_blue" onClick={toggleComments}>
              Show Comments
            </button>
          </div>
        </div>
      </div>

      {showComments && <ItemComments />}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ItemDetails;
