import React from 'react';
import './styles/SectionsStyle.css';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Michael_Remy from '../imgs/Michael_Remy.jpg';
import Covid19Photo from '../imgs/Covid19Photo.JPG';
import SpiderGame from '../imgs/SpiderGame.JPG';
import ContactUs from '../components/ContactForm.js';
import page1resume from '../imgs/page1resume.JPG';
import page2resume from '../imgs/page2resume.JPG';
import gym_bro from '../imgs/gym_bro.JPG';

const Sections = () => {

    return (
        <div>
            <div id="NavBar" className="row text-center">
                <div className="col-3">
                    <a href="#sec1">Michael Remy</a>
                </div>
                <div className="col-3">
                    <a href="#sec2">Projects</a>
                </div>
                <div className="col-3">
                    <a href="#sec2-5">Resume</a>
                </div>
                <div className="col-3">
                    <a href="#sec3">Contact</a>
                </div>
            </div>
            <section id="sec1">
                <div className="row text-center pt-5">
                    <div className="col-12 pt-5">
                        <img id="sec1Photo" src={Michael_Remy} alt="" className=""/>
                        <Fade top cascade> <h1 className="pt-4">Michael Remy</h1></Fade>
                        <LightSpeed left cascade> <h2 className="pt-4">Full Stack Developer</h2> </LightSpeed>
                    </div>
                </div>
            </section>
            <section id="sec2">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <p className="pt-3">Click on the photos to go to the deployed websites!</p>
                    </div>
                </div>
                <div id="section2" className="row text-center">
                    <div className="col-md-4">
                        <h3>Gym Bro</h3>
                        <p>Intuitive gym progress tracking website</p>
                        <a href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><img id="gymbroImg" src={gym_bro} alt=""/></a>
                        <p><a href="https://github.com/Michaeldremy/Gym_Bro_Python_Project" target="_blank" rel="noopener noreferrer"><button className="mt-4 btn btn-secondary">See Code</button></a></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Spider Queen Vol 1.</h3>
                        <p>Game created within Unity</p>
                        <a href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer"><img id="SpiderImg" src={SpiderGame} alt=""/></a>
                        <p><a href="https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project" target="_blank" rel="noopener noreferrer"><button className="mt-4 btn btn-secondary">See Code</button></a></p>
                    </div>
                    <div className="col-md-4">
                        <h3>Covid Tracker</h3>
                        <p>Covid-19 Data Visualization website</p>
                        <a href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer"><img id="CovidImg" src={Covid19Photo} alt=""/></a>
                        <p><a href="https://github.com/Michaeldremy/COVID-19-Tracker-Application/tree/master" target="_blank" rel="noopener noreferrer"><button className="mt-4 btn btn-secondary">See Code</button></a></p>
                    </div>
                </div>
                <div id="section2" className="row text-center pt-5">
                    <div className="col-md-12">
                        <h3>Tweet Me</h3>
                        <p>Twitter Inspired Application</p>
                        <p className="pt-4">Coming Soon...</p>
                        <a href="www.google.com" target="_blank" rel="noopener noreferrer"><img src="" alt=""/></a>
                        <p><a href="https://github.com/Michaeldremy/tweetme" target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary">See Code</button></a></p>
                    </div>
                </div>
            </section>
            <section id="sec2-5">
                <div className="row text-center pt-5">
                    <div className="col-6 pt-3"><img src={page1resume} alt="" id="section2-5"/></div>
                    <div className="col-6 pt-4"><img src={page2resume} alt="" id="section2-5"/></div>
                </div>
            </section>
            <section id="sec3">
                <ContactUs/>
            </section>
        </div>
    );
};

export default Sections;