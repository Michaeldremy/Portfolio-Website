import React, { useState } from "react";
import Modal from "react-modal";
// Material UI icons
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";
import LanguageIcon from "@material-ui/icons/Language";
// css
import "../../views/styles/Projects/ProjectModal.css";
// App components
import ImageSlider from "../Projects/ImageSlider";
import ProjectCard from "../Projects/ProjectCard";

// images

Modal.setAppElement("#root");
// Passing Image Slider props through component to have child pass correct props
const ProjectModal = ({
  imageOne,
  imageTwo,
  imageThree,
  projectTitle,
  projectDescription,
  projectCardImage,
  projectCardDeployedSiteUrl,
  projectCardName,
  githubLink,
  liveWebsiteUrl,
  demoPageUrl,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyle = {
    overlay: {
      backgroundColor: "grey",
    },
  };

  return (
    <>
      {/* ProjectCard Component */}
      <ProjectCard
        projectCardImage={projectCardImage}
        projectCardDeployedSiteUrl={projectCardDeployedSiteUrl}
        projectCardName={projectCardName}
        onClick={() => setModalIsOpen(true)}
      />
      <Modal
        className="modal-container"
        style={modalStyle}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {/* Image Slider Component */}
        <ImageSlider
          imageOne={imageOne}
          imageTwo={imageTwo}
          imageThree={imageThree}
        />
        <div className="project-modal-info">
          <h1>{projectTitle}</h1>
          <h3>{projectDescription}</h3>
        </div>
        <div className="project-modal-social-icons">
          <p>
            Github:{" "}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                style={{
                  fontSize: "28px",
                  color: "white",
                  verticalAlign: "middle",
                  paddingBottom: "6px",
                }}
              ></GitHubIcon>
            </a>
          </p>
          <a
            className="project-modal-internal-links"
            href={liveWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 .25rem" }}
          >
            View Live Website
          </a>
          <LanguageIcon
            style={{
              fontSize: "25px",
              color: "green",
              verticalAlign: "middle",
              paddingBottom: "5px",
            }}
          ></LanguageIcon>
          <br />
          <a
            className="project-modal-internal-links"
            href={demoPageUrl}
            style={{ margin: "0 .25rem" }}
          >
            View Project Demo
          </a>
          <StarIcon
            style={{
              fontSize: "25px",
              color: "orange",
              verticalAlign: "middle",
              paddingBottom: "3px",
            }}
          ></StarIcon>
        </div>
      </Modal>
    </>
  );
};

export default ProjectModal;
