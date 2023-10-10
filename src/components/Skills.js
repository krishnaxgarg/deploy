import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Skills.css";
import Cpp from "./Cpp";
import Node from "./Node";
import Express from "./Express";
import Bootstrap from "./Bootstrap";
import Mongoose from "./Mongoose";

const Skills = () => {
  return (
    <div className="percentage-meter">
      <div className="meter-text">
        <h3 className="h3">SKILLS PROFICIENCY</h3>
      </div>

      <div className="icon-container">
        <div className="icon html">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="icon css">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="icon java">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="icon react">
          <FontAwesomeIcon icon={faReact} />
        </div>
        <Bootstrap />
        <Cpp />
        <Node />
        <Express />
        <Mongoose />
      </div>
    </div>
  );
};

export default Skills;
