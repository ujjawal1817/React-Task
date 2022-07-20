import React from "react";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState("");
  const showValue = () => {
    console.log(data);
    setData("");
  };
  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-main">
          <div className="signup-img signup-width">
            <img src="./Images/envelope.png" alt="" />
          </div>
          <div className="signup-details signup-width">
            <p className="signup-paraone">
              Get industry update with our daily newsletter
            </p>
            <p className="signup-paratwo">Subscribe Now !</p>
          </div>
          <div className="signup-field signup-width">
            <input
              type="text"
              value={data}
              placeholder="Email Address"
              className="inp-field"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="signup-width signup-btnmain">
            <button className="signup-btn" onClick={showValue}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
