import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Software Developer I</p>
          <p>Iserveu Technology private limited</p>
          <p>
            <span>January'22 - January'23</span>
            <a href="/">
              <LocationOnIcon />
              Bhubneswar, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Internship</p>
          <p>Riser Techub</p>
          <p>
            <span>Aug'21 - January'22</span>
            <a href="/">
              <LocationOnIcon />
              Pune, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelors of Engineering</p>
          <p>Global Engineering College</p>
          <p>
            <span>October'14 - June'19</span>
            <a href="/">
              <LocationOnIcon />
              Jabalpur, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondary Education</p>
          <p>Kendriya Vidyalaya 1Stc School</p>
          <p>
            <span>April'13 - March'14</span>
            <a href="/">
              <LocationOnIcon />
              Jabalpur, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
