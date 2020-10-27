import React, { useState } from "react";
import "../../views/styles/Projects/ProjectCard.css";

const ProjectCardModal = ({
  onClick,
  projectCardImage,
  projectCardDeployedSiteUrl,
  projectCardName,
}) => {

  const [showButton, setShowButton] = useState(false)

  return (
    <>
      <div className="project-card-container">
        <div className="project-card-img-wrap" onClick={onClick}>
          <img src={projectCardImage} alt="card_image" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}/>
          {showButton && (
              <button className="project-card-hover-button" onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>Click Image</button>
          )}
        </div>
        <h1>
          View site: <a href={projectCardDeployedSiteUrl} target="_blank" rel="noopener noreferrer">{projectCardName}</a>
        </h1>
      </div>
    </>
  );
};

export default ProjectCardModal;
