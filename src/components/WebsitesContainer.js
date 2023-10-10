import React from "react";
import WebsiteCard from "./WebsiteCard";

const WebsitesContainer = () => {
  const websites = [
    { title: "Website 1", link: "https://example1.com" },
    { title: "Website 2", link: "https://example2.com" },
    { title: "Website 2", link: "https://example2.com" },
    { title: "Website 2", link: "https://example2.com" },

    // Add more websites as needed
  ];

  return (
    <div className="websites-container">
      {websites.map((website, index) => (
        <WebsiteCard key={index} {...website} />
      ))}
    </div>
  );
};

export default WebsitesContainer;
