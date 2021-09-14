import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Modal from "../components/Form";


function Home() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="main">
      <div className="home" id="home">
      {/* title */}
        <div className="title">
          <h1>Get Quality Hosting With Beehost</h1>
        </div>
        {/* body */}
        <div className="text">
          <p>
            Beehost is a company where you can host your websites in few
            minutes. Check out the best plan for you.
          </p>
        </div>
        {/* button */}
        <div className="explore">
          <Link smooth to="#packages">
            <button className="explore">EXPLORE NOW</button>
          </Link>
        </div>
      </div>

      {/* SIGN UP BUTTON */}
      <div className="signup">
        <a style={{cursor:"pointer"}}onClick={()=>setOpenModal(!openModal)}>SIGN UP</a>
      </div>
      {/* display the Login modal */}
     {openModal && <Modal closeModal={setOpenModal}/>}

     {/* Back to top */}
     {/* <div className="top">
     <Link smooth to="#home"><button>Top</button></Link>
     </div> */}
    </div>

  );
}

export default Home;
