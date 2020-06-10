import React from "react";
import latestlogo from "../images/latestlogo.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

function LandingPage() {
  return (
    <div className="App">
      <div id="header-wrapper">
        <div id="header" class="container">
          <div id="logo">
            <img src={latestlogo} alt="MarkBot" width="250" height="65" />
          </div>
          <div id="menu">
            <ul>
              <li class="active">
                <a href="#" accesskey="1" title="">
                  Homepage
                </a>
              </li>
              <li>
                <a href="about.html" accesskey="3" title="">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" accesskey="5" title="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="banner" class="container">
          <div class="title">
            <h2>Welcome to MarkBot</h2>
            <span class="byline">AI Powered Marketing and Branding</span>
          </div>

          <Link href="/markbot" class="button">
            Get Started
          </Link>
        </div>
      </div>
      <div id="wrapper">
        <div id="three-column" class="container">
          <div class="title">
            <h2>Mostly used and reviewed Key Product Features</h2>
            <span class="byline">Branding and Marketing</span>
          </div>
          <div class="boxA">
            <FontAwesomeIcon icon={faStar} />

            <p>Brand Logo and Color scheme generation</p>
          </div>
          <div class="boxB">
            <FontAwesomeIcon icon={faSwatchbook} />
            <p>Color Scheme for Branding</p>
          </div>
          <div class="boxC">
            <FontAwesomeIcon icon={faUsers} />
            <p>Target Audience Identification</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
