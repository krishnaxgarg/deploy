import React from "react";
import "../styles/SocialHandles.css"; // Import the CSS file
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons

const SocialHandles = () => {
  return (
    <div className="social-handles">
      <a
        href="https://twitter.com/YourTwitterHandle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/YourLinkedInProfile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-icon" />
      </a>
      <a
        href="https://github.com/YourGitHubProfile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-icon" />
      </a>
    </div>
  );
};

export default SocialHandles;
