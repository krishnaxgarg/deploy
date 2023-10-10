import React from "react";
import "./styles/WebsitePreview.css"; // Create this CSS file

const WebsitePreview = ({ title, link }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <div className="website-preview">
      <div className="preview">
        {/* Insert an image or iframe to display the website preview */}
        {/* Example with an image */}
        <img
          src={`https://placekitten.com/300/200`}
          alt={`Preview of ${title}`}
        />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <button onClick={handleButtonClick}>Visit Website</button>
      </div>
    </div>
  );
};

export default WebsitePreview;
