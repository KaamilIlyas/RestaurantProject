import React from "react";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Routes>
      <Route path="Menu" element={<Menu />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Home;