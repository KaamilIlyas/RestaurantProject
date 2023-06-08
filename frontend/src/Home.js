import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import Main from "./Customer/Main";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./Customer/ItemDetails";
import Aboutus from "./Customer/Aboutus";
import Header from "./Customer/Header";
import Footer from "./Customer/Footer";

const Home = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="CustomerPannel" element={<CustomerPannel />}>
          <Route path="Home" element={<Main />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Feedback" element={<Aboutus />} />
          <Route path="ItemDetails" element={<ItemDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Home;