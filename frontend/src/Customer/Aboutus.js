import React from "react";
import "../style/Aboutus.css";
import { useState } from "react";
import axios from "axios";

const Aboutus = () => {

  const [feed, setfeed] = useState({
    user_email: "",
    feedback: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/api/givefeedbacks",
      method: "POST",
      data: feed,
    };
    console.log("-----", feed);
    axios(options)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log(feed)}
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
          <button className="butt" onClick={clickHandel}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Aboutus;