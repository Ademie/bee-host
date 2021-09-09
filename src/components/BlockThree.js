import React from "react";
import lock from "../images/lock.svg";
import '../styles/Features.css'


function BlockThree() {
  return (
    <div className="block_three">
      <div className="image">
        <img src={lock} alt="" />
      </div>
      <div className="block">
        <h2 className="head">ENCRYPTION & PROTECTION</h2>
        <h1 className="block-text">Free SSL certificate for all accounts</h1>
        <p className="tag-text">
          We offer you free SSL protection irrespective of the hosting package you desire
        </p>
        <button className="featBtn">GET STARTED</button>
      </div>
    </div>
  );
}

export default BlockThree;
