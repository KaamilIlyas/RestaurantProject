import React from "react";
import "../style/Aboutus.css";
import { useState } from "react";
import axios from "axios";

const Aboutus = () => {
  const [feed, setfeed] = useState({
    user_email: "",
    feedback: "",
  });

  const [error, setError] = useState("");

  const handle = (e) => {
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    if (!feed.user_email || !feed.feedback) {
      setError("You can't leave the fields empty.");
      return;
    }

    if (!validateEmail(feed.user_email)) {
      setError("Please enter a valid email.");
      return;
    }

    const options = {
      url: "http://localhost:3001/api/givefeedbacks",
      method: "POST",
      data: feed,
    };

    axios(options)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="login-box">
        <h2>Feedback</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            id="em-input"
            name="user_email"
            value={feed.user_email}
            onChange={handle}
            data-testid="em_tid"
          />
          <textarea
            type="text"
            placeholder="Your Opinion"
            id="text-input"
            name="feedback"
            value={feed.feedback}
            onChange={handle}
            data-testid="feed_tid"
          />
          {error && <p className="error-message">{error}</p>}
          <button className="butt" onClick={clickHandel}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
