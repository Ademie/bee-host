import React from "react";
import '../styles/Faqs.css'
function Faqs() {
  return (
    <div className="FAQS" id="faqs">
      <div className="title">
        <h1 style={{textAlign:"center"}}>Fequently Asked Questions</h1>
        <h4 style={{textAlign:"center"}}>We might have answered your questions below</h4>
      </div>
      <div className="body">
        <div className="faq-text">
          <h3>Can I host a site for free?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>
        <div className="faq-text">
          <h3>Do you have hidden charges?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>

        <div className="faq-text">
          <h3>Do you have support for wordpress sites?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>
        </div>
        <div className="body">
        <div className="faq-text">
          <h3>What is your refund policy?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>
        <div className="faq-text">
          <h3>What are the payment methods you accept?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>
        <div className="faq-text">
          <h3>Can I transfer my site from another host?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            aliquam officiis. Amet distinctio non quis!
          </p>
        </div>
      </div>

      <div style={{textAlign:"center", maxWidth:'90vw'}}>
      <h2>Further Questions?</h2>
      <p>Use the Facebook Message Customer Chat at the bottom of the page...</p>
      </div>
    </div>
  );
}

export default Faqs;
