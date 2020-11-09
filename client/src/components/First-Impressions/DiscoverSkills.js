import React from 'react'
import CircleSkill from '../CircleSkill'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';

// css
import '../../views/styles/First-impressions/DiscoverSkills.css';

const DiscoverSkills = () => {
  return (
    <div className="discover-skills-container" id="about-me">
      <div className="technical-skills-container">
        {/* enter circle skill component */}
        <CircleSkill skill={"React"}/>
        <CircleSkill skill={"Redux"}/>
        <CircleSkill skill={"NodeJs"}/>
        <CircleSkill skill={"JavaScript"}/>
        <CircleSkill skill={"TypeScript"}/>
        <CircleSkill skill={"GraphQL"}/>
        <CircleSkill skill={"HTML"}/>
        <CircleSkill skill={"CSS"}/>
        <CircleSkill skill={"JWT"}/>
      </div>
      <div className="discover-skills-text">
        <InsertEmoticonIcon id="discover-skills-icons" style={{color: '#3aafa9'}}/>
        <p>Some interests of mine include creating Youtube videos, mountain biking, playing tennis and video games.</p>
        <AccountTreeRoundedIcon id="discover-skills-icons" style={{color: '#eaa30c'}}/>
        <p><span>Databases</span>: MySQL, MongoDB, MongoDB Atlas, AWS</p>
        <DeveloperModeRoundedIcon id="discover-skills-icons" style={{color: '#228B22'}}/>
        <p><span>Stacks</span>: MERN, Python/Django, C#/ASP.NET, React Native </p>
      </div>
    </div>
  )
}

export default DiscoverSkills
