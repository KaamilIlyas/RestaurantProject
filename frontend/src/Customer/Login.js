import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Main from "./Menu";
const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    full_name: "",
    password: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/api/login",
      method: "POST",
      data: user,
    };
    axios(options)
      .then((response) => {
        if (response.data.found) {
          if (response.data.object.isBlock == false) {
            navigate("../cust/home");
          } else {
            alert("ERROR");
          }
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {console.log("user is ", user)}
      <div className=" head">
        <img src={logo} alt="" />
      </div>
      <div className="login-box">
        <h2>Login</h2>

        <div className="indiv">
          <h5>Username</h5>
          <input
            type="text"
            name="full_name"
            value={user.full_name}
            required=""
            onChange={handle}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            required=""
            onChange={handle}
          />
        </div>

        <button className="butt" onClick={clickHandel}>
          Login
        </button>
        <div className="slink">
          Not Registered?
          <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};
export default Login;