import React from "react";

// App Compoents
import NavBar from "../Navigation/NavBar";
// Material UI Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CopyrightIcon from "@material-ui/icons/Copyright";
// Third Party Packages
import ReactPlayer from "react-player/youtube";
// CSS
import "../../views/styles/ProjectPage.css";
import "../../views/styles/AboutMe.css";

const ProjectDemo = ({
  projectDemoTitle,
  githubLink,
  reactPlayerUrl,
  bulletOne,
  bulletTwo,
  bulletThree,
  technologies,
}) => {
  return (
    <div>
      <NavBar />
      <section className="title-container">
        <div className="parallax">
          <div className="row">
            <div className="col-12">
              <h1 style={{textTransform: 'uppercase'}}>{projectDemoTitle}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                Github:{" "}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon
                    style={{ fontSize: "1.8rem", color: "black" }}
                  ></GitHubIcon>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="project-details-container">
        <div className="row">
          <div className="col-12">
            <h2>DEMO</h2>
          </div>
        </div>
        <div className="row">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={reactPlayerUrl}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="line-bottom-video"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>DETAILS</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 detail-points-container">
            <ul>
              <li className="detail-points">{bulletOne}</li>
              <li className="detail-points">{bulletTwo}</li>
              <li className="detail-points">{bulletThree}</li>
              <li className="detail-points">
                Technologies Used: {technologies}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="row footer-container">
          <div className="col-12">
            <a
              href="https://github.com/Michaeldremy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                style={{
                  fontSize: "30px",
                  marginTop: "1px",
                  color: "white",
                  opacity: ".6",
                }}
              ></GitHubIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/michaeldremy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                style={{
                  fontSize: "34px",
                  color: "white",
                  opacity: ".6",
                  marginRight: "2rem",
                  marginLeft: "2rem",
                }}
              ></LinkedInIcon>
            </a>
            <a href="mailto:michaeldremy@gmail.com">
              <MailOutlineIcon
                style={{
                  fontSize: "33px",
                  color: "white",
                  opacity: ".7",
                  marginBottom: "2px",
                }}
              ></MailOutlineIcon>
            </a>
          </div>
          <div className="col-12">
            <h1>
              <CopyrightIcon
                style={{
                  fontSize: "17px",
                  marginRight: "10px",
                  marginBottom: "2px",
                }}
              ></CopyrightIcon>
              Michael Remy
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDemo;
