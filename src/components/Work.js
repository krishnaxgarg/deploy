import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import "../styles/Work.css";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";
import web4 from "../assets/web4.jpg";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Work = () => {
  const projects = [
    {
      title: "Project 1",
      imageUrl: web1,
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      imageUrl: web2,
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      imageUrl: web3,
      link: "https://example.com/project3",
    },
    {
      title: "Project 4",
      imageUrl: web4,
      link: "https://example.com/project4",
    },
    {
      title: "Project 5",
      imageUrl: web1,
      link: "https://example.com/project4",
    },
    {
      title: "Project 6",
      imageUrl: web4,
      link: "https://example.com/project4",
    },
    // Add more projects as needed
  ];

  return (
    <div
      className="work-section left aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration="1200"
      id="work"
    >
      <h2>PORTFOLIO</h2>

      <div className="work-container ">
        {projects.map((project, index) => (
          <div className="work-card " key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="card-overlay ">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
        <ParticlesComponent />
      </div>
      <Skills />
    </div>
  );
};

export default Work;
