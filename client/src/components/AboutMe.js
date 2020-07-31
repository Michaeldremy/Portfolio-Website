import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Michael_Remy from '../imgs/Michael_Remy.jpg';
import '../views/styles/AboutMe.css';
import react_icon from '../imgs/react_icon.png';
import redux_icon from '../imgs/redux_icon.png';
import html_icon from '../imgs/html_icon.png'
import css_icon from '../imgs/css_icon.png'
import cSharp_icon from '../imgs/cSharp_icon.png';
import python_icon from '../imgs/python_icon.png';

function AboutMe() {
    return (
        <div>
            <div className="row text-center pt-5">
                <div className="col-12 pt-5">
                    <img id="sec1Photo" src={Michael_Remy} alt="" className="" />
                    <div className="boxSection">
                        <LightSpeed left cascade> <h3 className="">Michael Remy</h3></LightSpeed>
                        <LightSpeed left cascade> <h4 className="">Full Stack Developer</h4> </LightSpeed>
                        <h5>***************************************************</h5>
                        <h4>React | Redux | HTML | CSS | Python | C#</h4>
                        <img src={react_icon} alt="react icon" className="react_icon"/>
                        <img src={redux_icon} alt="redux icon" className="redux_icon"/>
                        <img src={html_icon} alt="html icon" className="html_icon"/>
                        <img src={css_icon} alt="css icon" className="css_icon"/>
                        <img src={python_icon} alt="python icon" className="python_icon"/>
                        <img src={cSharp_icon} alt="c# icon" className="cSharp_icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
