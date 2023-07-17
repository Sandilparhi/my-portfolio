import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>ski</span>lls
        </div>
        <p>
          It is possible to fly without motors, but not without knowledge and
          skill.
        </p>
      </div>
      <div className="skill-right">
        <div id="myCanvasContainer">
          <canvas width="700" height="700" id="myCanvas"></canvas>
        </div>
        <div id="tags">
          <ul>
            <li>
              <a href="/skills">Javascript</a>
            </li>
            <li>
              <a href="/skills">React</a>
            </li>
            <li>
              <a href="/skills">Html</a>
            </li>
            <li>
              <a href="/skills">Css</a>
            </li>
            <li>
              <a href="/skills">Kubernetes</a>
            </li>
            <li>
              <a href="/skills">Python</a>
            </li>
            <li>
              <a href="/skills">VS Code</a>
            </li>
            <li>
              <a href="/skills">Website</a>
            </li>
            <li>
              <a href="/skills">Aws</a>
            </li>
            <li>
              <a href="/skills">Nodejs</a>
            </li>
            <li>
              <a href="/skills">Angular</a>
            </li>
            <li>
              <a href="/skills">react-routing</a>
            </li>
            <li>
              <a href="/skills">Git</a>
            </li>
            <li>
              <a href="/skills">ES6+</a>
            </li>
            <li>
              <a href="/skills">Docker</a>
            </li>
            <li>
              <a href="/skills">Devops</a>
            </li>
            <li>
              <a href="/skills">Networking</a>
            </li>
            <li>
              <a href="/skills">Github</a>
            </li>
            <li>
              <a href="/skills">Linux</a>
            </li>
            <li>
              <a href="/skills">S3 Bucket</a>
            </li>
            <li>
              <a href="/skills">Amazon EC2</a>
            </li>
            <li>
              <a href="/skills">Jenkins</a>
            </li>
            <li>
              <a href="/skills">Cloud Computing</a>
            </li>
            <li>
              <a href="/skills">Prometheus</a>
            </li>
            <li>
              <a href="/skills">Ansible</a>
            </li>
            <li>
              <a href="/skills">Azure</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
