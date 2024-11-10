import Image from "next/image";
import React from "react";
import portfolio from "../../public/portfolio.png";
import gfs from "../../public/gfs.png";
import resume from "../../public/resume-builder.png";
import ems from "../../public/ems.png";
import quizApp from "../../public/quiz-app.png";
import airlines from "../../public/airlines.png";

const Project = () => {
  return (
    <>
      <div id="projects" className="projects">
        <div className="project-container">
          <div className="heading-container">
            <h1>Projects</h1>
          </div>

          <div className="row1">
            <div className="project-card">
              <div className="title">
              <a href="https://rasheedahmed-portfolio.vercel.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={portfolio} alt="responsive-design" />
                </div>
                <div className="title-heading">Portfolio Website</div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="title">
              <a href="https://real-state-website-chatbot.vercel.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={gfs} alt="responsive-design" />
                </div>
                <div className="title-heading">Real State Website</div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="title">
              <a href="https://interactive-resumebuilder.vercel.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={resume} alt="responsive-design" />
                </div>
                <div className="title-heading">Resume Builder</div>
                </a>
              </div>
            </div>
          </div>
          <div className="row2">
          <div className="project-card">
              <div className="title">
              <a href="https://employee-management-system-steel.vercel.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={ems} alt="responsive-design" />
                </div>
                <div className="title-heading">Employee Management System</div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="title">
              <a href="https://react-quiz-app-209ff.web.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={quizApp} alt="responsive-design" />
                </div>
                <div className="title-heading">React Quiz App</div>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="title">
              <a href="https://rasheedairlines-website.vercel.app/" target="_blank">
                <div className="title-img">
                  <Image className="img" src={airlines} alt="responsive-design" />
                </div>
                <div className="title-heading">Airlines Website</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
