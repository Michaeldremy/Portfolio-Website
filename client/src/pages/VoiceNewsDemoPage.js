import React from "react";

import ProjectDemo from '../components/Projects/ProjectDemo';

const VoiceNewsDemoPage = () => {
  return (
    <div>
      <ProjectDemo 
      projectDemoTitle={"Voice News | Alan AI"}
      githubLink={"https://github.com/Michaeldremy/React-Alan-AI-News-Application"}
      reactPlayerUrl={""}
      bulletOne={"Programmed Alan AI to make API calls to a news API then returned JSON object to save in React state to be used in destructured reusable React components"}
      bulletTwo={"Article card styling gets highlighted depending on which article Alan AI is reading from"}
      bulletThree={"Designed all front end of application within React using HTML/CSS and JavaScript"}
      technologies={"React, JavaScript, Alan AI, HTML/CSS"}
      />
    </div>
  );
};

export default VoiceNewsDemoPage;
