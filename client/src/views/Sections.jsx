import React from 'react';
import './styles/SectionsStyle.css';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Michael_Remy from '../imgs/Michael_Remy.jpg';
import Covid19Photo from '../imgs/Covid19Photo.JPG';
import ContactForm from '../components/ContactForm.js';

const Sections = () => {

    return (
        <div>
            <div id="NavBar" className="row text-center">
                <div className="col-4">
                    <a href="#sec1">Michael Remy</a>
                </div>
                <div className="col-4">
                    <a href="#sec2">Projects</a>
                </div>
                <div className="col-4">
                    <a href="#sec3">Contact</a>
                </div>
            </div>
            <section id="sec1">
                <div className="row text-center pt-5">
                    <div className="col-12 pt-5">
                        <img id="sec1Photo" src={Michael_Remy} alt=""/>
                        <Fade top cascade> <h1>Michael Remy</h1></Fade>
                        <LightSpeed left cascade> <h2>Full Stack Developer</h2> </LightSpeed>
                    </div>
                </div>
            </section>
            <section id="sec2">
                <div  id="section2" className="row text-center pt-5">
                    <div className="col-md-4">
                        <h3>Gym Bro</h3>
                        <p>Intuitive gym progress tracking website</p>
                        <img src="" alt=""/>
                    </div>
                    <div className="col-md-4">
                        <h3>Spider Queen Vol 1.</h3>
                        <p>Game created within Unity</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Covid Tracker</h3>
                        <p>Covid-19 Data Visualization website</p>
                        <img id="CovidImg" src={Covid19Photo} alt=""/>
                    </div>
                </div>
            </section>
            <section id="sec3">
                <ContactForm />
            </section>
        </div>
    );
};

export default Sections;