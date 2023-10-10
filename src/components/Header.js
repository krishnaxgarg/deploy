import React, { useState, useEffect } from "react";
import video from "../assets/sample3.mp4";
import darkVideo from "../assets/dark4.mp4";
import DarkModeToggle from "../DarkModeToggle";
import "../styles/Header.css";
import Water from "./Water";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mode, setMode] = useState("light");
  const [role, setRole] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["MERN stack developer ", "UI/UX designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById("video");

    if (mode === "light") {
      videoElement.src = video;
    } else {
      videoElement.src = darkVideo;
    }

    videoElement.load();

    if (videoElement.paused) {
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [mode]);

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleWorkClick = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      window.scrollTo({
        top: workSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleConnectClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      window.scrollTo({
        top: connectSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const navbar = document.querySelector(".navbar");

    if (navbar) {
      navbar.classList.toggle("dark-mode-navbar");
    }
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        mode === "dark" ? "dark-mode" : ""
      }`}
    >
      <div
        className="navbar left aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <div className="nav-group">
          <button className="nav-btn" onClick={handleHomeClick}>
            HOME
          </button>
          <button className="nav-btn" onClick={handleAboutClick}>
            ABOUT
          </button>
          <button className="nav-btn" onClick={handleWorkClick}>
            WORK
          </button>
        </div>
        <div className="contact-group">
          <button className="contact-btn" onClick={handleConnectClick}>
            CONNECT
          </button>
        </div>
      </div>
      <DarkModeToggle mode={mode} onClick={handleModeToggle} />
      <div className="video-container">
        <video autoPlay muted loop className="video-bg" id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <Water />
          <h2>
            I am Krishna, a{" "}
            <span className="role-transition">{roles[roleIndex]}</span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
