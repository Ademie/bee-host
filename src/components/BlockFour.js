import React from "react";
import Shuttle from "../images/space-shuttle.svg";
import "../styles/Features.css";
import "../styles/Packages.css";

function BlockFour({ props }) {
  return (
    <div className="block_one block_four">
      <div className="image package_img" >
        <img src={Shuttle} />
      </div>
      <div className="block">
        <h2 className="head">FACEBOOK COMMUNITY</h2>
        <h1 className="block-text">Skyrocket your hosting experience</h1>
        <p className="tag-text">
          Join our FACEBOOK COMMUNITY to stay updated with the lastest trends
          for web hosting
        </p>
        <button className="featBtn">GET STARTED</button>
      </div>
    </div>
  );
}

export default BlockFour;
