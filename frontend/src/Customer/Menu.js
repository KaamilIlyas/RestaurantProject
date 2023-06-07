import React from "react";
import Items from "./Items";
import Dtems from "../Dishes";

function show(obj) {
  return (
    <Items ipath={obj.ipath} des={obj.des} name={obj.name} price={obj.price} />
  );
}

const Menu = () => {
  return <>{Dtems.map(show)}</>;
};

export default Menu;