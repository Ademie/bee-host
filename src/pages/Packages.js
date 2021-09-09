import React from "react";
import Basic from "../components/Basic";
import BlockFour from "../components/BlockFour";
import Diamond from "../components/Diamond";
import Gold from "../components/Gold";
import "../styles/Packages.css";
function Packages() {
  return (
    <div className="Packages" id="packages">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "80vw",
            textAlign: "center",
            marginBottom:"40px"
          }}
        >
          Select A Hosting Package
        </h1>
        <div className="container">
          <Basic />
          <Gold />
          <Diamond />
        </div>
      
      <div className="contactSpace">
        <h1 className="newsletter">
          Would you love to join our newsletter?
        </h1>
        <form>
          <input type="email" placeholder="Email here..." />
          <button type="submit">SEND</button>
        </form>
        <BlockFour />
      </div>
    </div>
  );
}

export default Packages;
