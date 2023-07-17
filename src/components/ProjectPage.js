import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Bot</p>
          <p>QR Code DiscordBot</p>
          <p>
            <span>2021</span>
            <a href="https://github.com/Sandilparhi/DiscordBot_QR_codeGenerator">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Kubernetes</p>
          <p>NodeJsApp-OnK8s</p>
          <p>
            <span>2022</span>
            <a href="https://github.com/Sandilparhi/NodeJsApp-OnK8s">Tap to view</a>
          </p>
        </div>
        <div className="project">
          <p>Nodejs-on-ec2 </p>
          <p>Amazon EC2</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/Sandilparhi/nodejs-on-ec2">Tap to view</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
