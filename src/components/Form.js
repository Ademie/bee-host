import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Modal.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});
const Modal = ({ closeModal }) => {
  // validation...destructure the useForm hook which takes in 3 basic parameters
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    reset(); //clear input field
    document.getElementById("topMsg").innerHTML = `<marquee> Thanks for signing up Account Feature is coming soon...</marque>`
    
    document.getElementById("botMsg").innerHTML = ` `

  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <a
            style={{ cursor: "pointer" }}
            className="close"
            onClick={() => closeModal(false)}
          >
            X
          </a>
        </div>
        <span id="topMsg" style={{textAlign:"center"}}></span>
        <div className="title">
          <h1>JOIN US</h1>
        </div>
        <div className="body">
          {/* SIGN UP FORM */}
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              required
              {...register("email")}
            />
            <span className="formError">{errors.email?.message}</span>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              required
              {...register("password")}
            />
            <span className="formError">{errors.password?.message}</span>
            <div className="foot">
              <button className="cancel" type="reset">
                Reset
              </button>
              <button type="submit">Sign Up</button>
            </div>
            <span id="botMsg" style={{textAlign:"center", fontSize:"12px"}}></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
