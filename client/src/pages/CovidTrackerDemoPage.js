import React from 'react'

import ProjectDemo from '../components/Projects/ProjectDemo';

export const CovidTrackerDemoPage = () => {
  return (
    <div>
      <ProjectDemo 
      projectDemoTitle={"Covid-19 Case Tracker"}
      githubLink={"https://github.com/Michaeldremy/COVID-19-Tracker-Application"}
      reactPlayerUrl={"https://www.youtube.com/watch?v=m99r-Eo7MM0&feature=youtu.be"}
      bulletOne={"Individually created and deployed a completely responsive web application that pulls Covid-19 data from 100+ countriesand present total recovered, infected and death cases"}
      bulletTwo={"Made API call to a real time JSON API through useEffect hook in React then made call-backs to database to save information using Node, Express and MongoDB"}
      bulletThree={"Integrated ChartJS by using pulled information from JSON API to create data visual representation through deconstructed reusable React components with material-UI "}
      technologies={"MERN (MongoDB, Express, React and NodeJS), HTML/CSS3, ChartJS, Material-UI"}
      />
    </div>
  )
}
