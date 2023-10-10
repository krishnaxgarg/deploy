import React from "react";
import profileImage from "../assets/image4.jpg"; // Make sure the path is correct
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="shane_tm_section" id="about">
      <div className="shane_tm_about">
        <div className="container">
          <div className="about_inner">
            <div
              className="left aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="image">
                <img src={profileImage} alt="Profile" />
              </div>
            </div>
            <div className="right">
              <div
                className="shane_tm_title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="span">ABOUT ME</span>
                <h2>Creative Independent Web Developer based in India</h2>
              </div>
              <div
                className="text aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <p className="p">
                  As a seasoned web designer, I approach every project with a
                  fervent passion and unwavering dedication. With a wealth of
                  experience in crafting dynamic web applications, I possess the
                  essential skills and comprehensive knowledge required to
                  ensure project success. I find immense gratification in each
                  phase of the design process, relishing in meaningful
                  discussions and productive collaborations. My commitment to
                  delivering exceptional web solutions is underlined by a track
                  record of consistently surpassing project objectives.
                </p>
              </div>
              <div
                className="shane_tm_button aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <a href="img/resume/resume.jpg" download="">
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
