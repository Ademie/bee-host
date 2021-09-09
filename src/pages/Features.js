import React from "react";
import BlockOne from "../components/BlockOne";
import BlockThree from "../components/BlockThree";
import BlockTwo from "../components/BlockTwo";


function Features() {
  return (
    <div className="Features" id="features">
        <BlockOne />
        <BlockTwo/>
        <BlockThree/>      
    </div>
  );
}

export default Features;
