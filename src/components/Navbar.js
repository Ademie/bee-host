import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiBee } from "react-icons/gi";
import "../styles/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link'


function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
  return (
    <div className="navbar">
      <div className="leftNav">
        {/* logo */}
        <div className="logo">
          <Link smooth to="#home">
            BEE
            <GiBee />
            HOST
          </Link>
        </div>
      </div>
      <div className="rightNav">
        {/* links */}
        <div className="links" id={showLinks ? "show" : ""}>
        {/* onclick functions here close the menu after clicking on mobile */}
          <Link smooth to="#features" onClick={()=>{setShowLinks(!showLinks)}}>Features</Link>
          <Link smooth to="#packages" onClick={()=>{setShowLinks(!showLinks)}}>Packages</Link>
          <Link smooth to="#blog" onClick={()=>{setShowLinks(!showLinks)}}>Blog</Link>
          <Link smooth to="#faqs" onClick={()=>{setShowLinks(!showLinks)}}>FAQS</Link>
          <Link smooth to="#home" onClick={()=>{setShowLinks(!showLinks)}}>
          <button className="welcomeBtn">Home</button></Link>



          {/* toggle mobile menu */}
          <button className="menu" onClick={()=>{setShowLinks(!showLinks)}}>
              <FaBars />
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
//Automatically refresh the app without reloading the webpage
if (module.hot) {
  module.hot.accept();
}
