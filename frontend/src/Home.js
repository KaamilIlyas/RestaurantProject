import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import Main from "./Customer/Main";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./Customer/ItemDetails";
import Aboutus from "./Customer/Aboutus";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="cust" element={<CustomerPannel />}>
          <Route path="Home" element={<Main />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Feedback" element={<Aboutus />} />
          <Route path="det" element={<ItemDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;