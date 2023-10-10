// WorkCard.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WorkCard = ({ project }) => {
  return (
    <div className="work-card ">
      <div className="work-card-inner">
        <div className="work-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="work-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
