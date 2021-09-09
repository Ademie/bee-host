import React from "react";
import Key from "../images/key.svg";

import '../styles/Features.css'


function BlockOne({props}) {
  return (
    <div className="block_one">
      <div className="image">
        <img src={Key} alt="" />
      </div>
      <div className="block">
        <h2 className="head">EXCLUSIVE ACCESS</h2>
        <h1 className="block-text">Exclusive Hosting just for you</h1>
        <p className="tag-text">
          Get access to our exclusive web hosting services that allows you to
          keep your site up and running 24/7
        </p>
        <button className="featBtn">GET STARTED</button>
      </div>
    </div>
  );
}

export default BlockOne;
