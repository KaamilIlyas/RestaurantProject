import React, { useState } from "react";
import "../style/Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => { 

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!user.full_name || !user.email || !user.phone_number || !user.address || !user.password) {
      setError("Please fill out all fields.");
      return false;
    }

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!validateEmail(user.email)) {
      setError("Please enter a valid email.");
      return;
    }

    // if (!user.email.includes("@")) {
    //   setError("Please enter a valid email address.");
    //   return false;
    // }

    return true;
  };

  const submitHandler = () => {
    if (validateForm()) {
      axios
        .post("http://localhost:3001/api/register", user)
        .then((response) => {
          console.log("Signed Up");
          navigate("/Login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="s-box">
        <h2>Signup</h2>
        <div className="sindiv">
          <h5>Full Name</h5>
          <input
            type="text"
            value={user.full_name || ""}
            name="full_name"
            onChange={handleInputChange}
            data-testid="fn-tid"
          />

          <h5>Email</h5>
          <input
            type="email"
            value={user.email || ""}
            name="email"
            onChange={handleInputChange}
          />

          <h5>Phone number</h5>
          <input
            type="number"
            value={user.phone_number || ""}
            name="phone_number"
            onChange={handleInputChange}
            data-testid="ph-tid"
          />

          <h5>Address</h5>
          <input
            type="text"
            value={user.address || ""}
            name="address"
            onChange={handleInputChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={user.password || ""}
            name="password"
            onChange={handleInputChange}
          />

          <h5>Confirm Password</h5>
          <input type="password" name="confirmPass" />

          {error && <p className="error">{error}</p>}
        </div>

        <button className="sbutt" onClick={submitHandler}>
          Submit
        </button>
        <div className="llink">
          Already have an Account?
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;