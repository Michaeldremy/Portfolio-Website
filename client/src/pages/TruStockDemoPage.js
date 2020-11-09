import React from 'react'

import ProjectDemo from '../components/Projects/ProjectDemo';

const TruStockDemoPage = () => {
  return (
    <div>
      <ProjectDemo 
      projectDemoTitle={"TruStock | Virtual Banking Page"}
      githubLink={"https://github.com/Michaeldremy/TruStock-React-Responsive-Website"}
      reactPlayerUrl={"https://www.youtube.com/watch?v=swes8tsTZqg&feature=youtu.be&ab_channel=RemyFamily"}
      bulletOne={"React application built with styled-components"}
      bulletTwo={"Developed styled-component classes with ternary operators to be able to change sections of site with boolean values through a data.js file"}
      bulletThree={"Used npm packages such as react-scroll for smooth scrolling and react-router-dom for navigation and to create custom link components"}
      technologies={"React, Styled-Components, HTML/CSS, JavaScript"}
      />
    </div>
  )
}

export default TruStockDemoPage
