import React from "react";
import "../styles/WebsiteCard.css";

const WebsiteCard = ({ title, link, image }) => {
  return (
    <div className="website-card">
      <img src={image} alt={title} className="website-image" />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default WebsiteCard;
