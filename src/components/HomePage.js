import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./HomePage.css";
import Navbar from "./Navbar";
import loadingGif from "../working.gif"

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
      
        <div>
        <img src={loadingGif} alt="wait until the page loads" />
          <span>hey,</span>
          <p>
            this is<span> Sandil Parhi</span>,
          </p>
        </div>
        <span>a web developer & Devops Engineer.</span> 
        <br/>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/Sandilparhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sandil-parhi-9755b3109/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/sandilparhi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a href="/">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
