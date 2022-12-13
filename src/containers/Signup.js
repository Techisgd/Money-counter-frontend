import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Money-Count-Logo.png';
import Header from "../components/default/Header";
import SignupForm from "../components/landing-page/SignupForm";

export default function SignUp() {
	return (
    <>
      <div className="sign-up">
        <div className="blue-bg">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="sign-up-form">
          <div className="form-container">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
}
