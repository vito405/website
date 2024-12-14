import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Correct import for faDatabase

export default function Skills() {
  return (
    <div id="Skills-Container">
      <h1>My Skills</h1>
      <div id="icon-Container">
        <div className="tech-item">
          <FontAwesomeIcon icon={faHtml5} size="5x" className="custom-html-icon" />
          <span className="tech-name">HTML5</span>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faCss3Alt} size="5x" className="custom-css-icon" />
          <span className="tech-name">CSS3</span>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faJsSquare} size="5x" className="custom-JavaScript-icon" />
          <span className="tech-name">JavaScript</span>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faReact} size="5x" className="custom-react-icon" />
          <span className="tech-name">React</span>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faDatabase} size="5x" className="custom-sql-icon" />
          <span className="tech-name">SQL</span>
        </div>
        <div className="tech-item">
          <FontAwesomeIcon icon={faGithub} size="5x" className="custom-github-icon" />
          <span className="tech-name">GitHub</span>
        </div>
      </div>
    </div>
  );
}
