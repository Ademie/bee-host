import React from "react";
import Setting from "../images/setting.svg";
import '../styles/Features.css'


function BlockTwo() {
  return (
    <div className="block_two">
      <div className="image">
        <img src={ Setting } alt="" />
      </div>
      <div className="block">
        <h2 className="head">EASY SETUP</h2>
        <h1 className="block-text">Host your website in 3 easy steps</h1>
        <p className="tag-text">
            Host your website easily in intuitive and simple steps without hassles nor interface ambiguity
        </p>
        <button className="featBtn">GET STARTED</button>
      </div>
    </div>
  );
}

export default BlockTwo;
