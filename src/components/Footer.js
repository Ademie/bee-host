import React from "react";
import { GiBee } from "react-icons/gi";
import { RiFacebookCircleLine} from "react-icons/ri";
import { FiTwitter} from "react-icons/fi";
import {SiInstagram} from 'react-icons/si'

import { Link } from "react-router-dom";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="upper">
        <div className="about">
          <h2>
            <div className="logo">
            ABOUT &nbsp;
              <Link smooth to="#home">
                BEE
                <GiBee />
                HOST
              </Link>
            </div>
          </h2>
          <p>
            We are a hosting company commited to Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="quick-links">
          <h2>QUICK-LINKS</h2>
          <Link smooth to="#features">
            Features
          </Link>
          <Link smooth to="#packages">
            Packages
          </Link>
          <Link smooth to="#blog">
            Blog
          </Link>
          <Link smooth to="#faqs">
            FAQS
          </Link>
        </div>

        <div className="legal">
          <h2>LEGAL</h2>
          <Link smooth to="#features">
            Terms
          </Link>
          <Link smooth to="#packages">
            Privacy
          </Link>
          <Link smooth to="#blog">
            Refund Policy
          </Link>
        </div>
        <div className="partner">
          <h2>PARTNER</h2>
          <Link smooth to="#features">
            Refer a friend
          </Link>
          <Link smooth to="#packages">
            Support
          </Link>
          <Link smooth to="#blog">
            Affiliates
          </Link>
        </div>
      </div>

      <div className="lower">
        <div className="copy">
        &copy; 2021 BeeHost | Designed: <a href="">Ademie</a>
        </div>
        <div className="socials">
        <a href="facebook.com">
        <RiFacebookCircleLine className="soc-icon"/>
        </a>
        <a href="#instagram.com">
        <SiInstagram className="soc-icon"/>
        </a>
        <a href="#twitter">
        <FiTwitter className="soc-icon"/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
