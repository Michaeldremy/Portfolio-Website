import React, { useEffect } from 'react';
import './styles/SectionsStyle.css';
import Covid19Photo from '../imgs/Covid19Photo.JPG'
import SpiderGame from '../imgs/SpiderGame.JPG';
import ContactUs from '../components/ContactForm.js';
import Aos from 'aos';
import "aos/dist/aos.css";
import gym_bro from '../imgs/gym_bro.JPG';
import AboutMe from '../components/AboutMe';
import githubIcon from '../imgs/githubIcon.png'

const Sections = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

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
                <AboutMe />
            </section>
            <section id="sec2">
                <div className="container">
                    <div className="col-12">
                        <h5 className="h5ProjectHeader" data-aos="fade-down">PROJECTS</h5>
                    </div>
                </div>
                <div id="section2" className="row text-center">
                    <div className="col-md-6" style={{ paddingTop: "5%" }}>
                        <a href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><h5 className="h5GymBro" data-aos="fade-right">GYM BRO</h5></a>
                        <div className="projectBoxGymBro" data-aos="fade-right">
                            <h6>Full-stack web development using Python and Django to allow users to select a daily workout comprising of curated exercise sets,
                                keep track of their accomplishments and view a graphical representation of their workout stats.</h6>
                        </div>
                        <div>
                            <h3 className="h3GymBro" data-aos="fade-right">Python | Django | ChartIt</h3>
                        </div>
                        <div data-aos="fade-right">
                            <a href="https://github.com/Michaeldremy/Gym_Bro_Python_Project" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" id="GymBroGitHubIconBorder" /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><img src={gym_bro} alt="" id="gymbroImg" data-aos="fade-left" /></a>
                    </div>
                    <div className="col-md-6">
                        <a href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer"><img src={Covid19Photo} alt="" id="covidImg" data-aos="fade-right" /></a>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: "5%" }}>
                        <a href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer"><h5 className="h5Covid" data-aos="fade-left">COVID-19 TRACKER</h5></a>
                        <div className="projectBoxCovid" data-aos="fade-left">
                            <h6>Full-stack web development using MERN (MongoDB, Express, React, Node.js)
                                    to create a completely responsive data visualization website to track COVID-19 information.</h6>
                        </div>
                        <div>
                            <h3 className="h3Covid" data-aos="fade-left">React | MongoDB | Express | Node.js</h3>
                        </div>
                        <div data-aos="fade-left">
                            <a href="https://github.com/Michaeldremy/COVID-19-Tracker-Application/tree/master" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" id="CovidGitHubIconBorder" /></a>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: "5%" }}>
                        <a href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer"><h5 className="h5Spider" data-aos="fade-right">SPIDER QUEEN</h5></a>
                        <div className="projectBoxSpider" data-aos="fade-right">
                            <h6>Game created within Unity using C# object orientated programming to find weapons, ammo, navigate through rooms of animated zombies 
                                and giant spiders, and attempt to find and destroy the Spider Queen in this first person shooter game.</h6>
                        </div>
                        <div>
                            <h3 className="h3Spider" data-aos="fade-right">C# | JavaScript | Unity</h3>
                        </div>
                        <div data-aos="fade-right">
                            <a href="https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" id="SpiderGitHubIconBorder" /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer"><img src={SpiderGame} alt="" id="SpiderImg" data-aos="fade-left" /></a>
                    </div>
                </div>
            </section>
            <section id="sec3">
                <ContactUs />
            </section>
        </div>
    );
};

export default Sections;