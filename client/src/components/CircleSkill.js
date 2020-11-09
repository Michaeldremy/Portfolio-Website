import React from 'react'
import '../views/styles/CircleSkill.css';

const CircleSkill = ({ skill }) => {

  // involve some sort of modal to populate when clicking on a particular skill/language

  return (
    <div className="circle-skill-container">
      <div className="actual-circle">
        <h1>{skill}</h1>
      </div>
    </div>
  )
}

export default CircleSkill
