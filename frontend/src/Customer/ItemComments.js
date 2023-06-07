import React from "react";
import "../style/ItemComments.css";
// import { useState } from "react";

// const a = [];
const ItemComments = () => {

  return (
    <>
      <div className="commentbox">
        <h1>Comments</h1>
        <div className="comArea">
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
        </div>
        <div className="tanb">
          <textarea
            placeholder="Comment here"
            id="enter"
          ></textarea>
          <button id="comm">
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

const Single = () => {
  return (
    <>
      <div className="single_con">
        <h4>name</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          minima ratione ducimus aut sit tempora.
        </p>
      </div>
    </>
  );
};

export default ItemComments;