import React, { useState } from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:3001/api/login", user)
      .then((response) => {
        if (response.data.success) {
          //token received, handle it accordingly (store it in local storage)
          const token = response.data.token;
          console.log("Token:", token);


          navigate("/Home");
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <div className="indiv">
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            value={user.email}
            required
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleChange}
          />
        </div>
        <button className="butt" onClick={handleClick}>
          Login
        </button>
        <div className="slink">
          Not Registered? <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
