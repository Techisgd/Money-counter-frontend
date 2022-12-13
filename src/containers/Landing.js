import React from "react";
import { Page, Section } from "react-page-layout";
import exampleImage from "../assets/images/summary.png";
import { Link } from "react-router-dom";
import graph from "../assets/images/income.png";
import card from "../assets/images/card.png";
import Logo from "../assets/images/Money-Count-Logo.png";

export default function Landing() {
  return (
    <Page layout="public">
      <Section slot="main">
        <div className="landing-page">
          <div className="blue-bg">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="gray-bg">
            <div className="logins">
              <div className="forms">
                <Link className="sign-up-mobile" to="/sign-in">
                  <button className="mt-2 custom-btn mobile" type="button">
                    Sign In
                  </button>
                </Link>
                <Link className="sign-up-mobile" to="/sign-up">
                  <button className="mt-2 custom-btn mobile" type="button">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className="gray-container">
              <div className="left-gray-bg">
                <h1>Welcome</h1>
                <h2>
                  Sign up and Manage <br></br> Your Budget
                </h2>
                <p>
                  Note down your expenditure and income, <br></br> then check
                  your balance everyday
                </p>
                <img id="graphdemo" src={graph} />
              </div>
              <div className="right-gray-bg">
                <img src={card} alt="card" />
                <img src={exampleImage} alt="example-pic" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
}
