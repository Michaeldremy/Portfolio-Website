import React from "react";

// react-reveal
import Fade from 'react-reveal/Fade';

// css
import '../../views/styles/First-impressions/Intro.css';

import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro-section-container">
      <div className="intro-text-container">
        <Fade cascade>
        <h1>I am a</h1>
        <Typewriter
          options={{
            strings: ["Full Stack Developer.", "outdoor enthusiast.", "YouTuber.", "Gamer."],
            autoStart: true,
            loop: true,
          }}
          />
          </Fade>
      </div>
      <div className="intro-right-container">
        <div className="intro-right-text-container">
          <h1><Fade top cascade>Nice to meet you.</Fade></h1>
          <p><Fade bottom cascade>I graduated from a coding bootcamp called "Coding Dojo" at the end of May. 
            I am changing careers from 4 years of technology sales to play a more active role in creating technology
            for future generations.</Fade></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
