import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          I love to create something simple and clean using javascript with html
          and css.
        </div>
        <div className="about-right">
          <p>
            I'm <span>Sandil Parhi</span>. I am a <span>Software Engineer</span> at iServeu private limited
             in India. I have done <span>Bachelor Of Engineering</span> from 
             Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.
            
          </p>
          <p>
            I specialize in efficient <span>Fullstack Developer</span> & <span>Devops</span>  
              <br></br> manage and monitor websites. I care deeply about building interfaces that
            are usable and pleasant for the most number of people possible.
          </p>
          <p>
            Right now, I’m excited about improving skill on writing automated
            <span> test cases</span> and becoming a <span>Senior Software Egineer</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
