import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../style/Cust_Nav.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Aboutus from "./Aboutus";
import Login from "./Login";
import Signup from "./Signup";
import ItemComments from "./ItemComments";
const CustomerPannel = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Feedback" element={<Aboutus />} />
        <Route path="/ItemComments" element={<ItemComments />} />
        <Route path="/ItemDetails" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default CustomerPannel;