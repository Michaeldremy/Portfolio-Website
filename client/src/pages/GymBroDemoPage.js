import React from 'react'

import ProjectDemo from '../components/Projects/ProjectDemo';

const GymBroDemoPage = () => {
  return (
    <div>
      <ProjectDemo 
      projectDemoTitle={"Gym Bro | Workout Statistic Tracker"}
      githubLink={"https://github.com/Michaeldremy/Gym_Bro_Python_Project"}
      reactPlayerUrl={"https://www.youtube.com/watch?v=OvdY21pwLYQ&feature=youtu.be"}
      bulletOne={"Implemented front and back-end validation utilizing HTML, JavaScript, Regex and Bcrypt for hashed passwords to enhance security"}
      bulletTwo={"Utilized MySQL database for its relational database so users can see their workout stats displayed through ChartIt on their profile page"}
      bulletThree={"Took initiative to create all the front-end design, RESTful routing, set up Django models that allowed users to login or create an account and I assisted in the setup of the weekly list of workout models"}
      technologies={"Python, Django, JavaScript, HTML/CSS3, MySQL, ChartIt, Bcrypt, Regex"}
      />
    </div>
  )
}

export default GymBroDemoPage
