import React, {useEffect} from 'react';
import '../views/styles/AboutMe.css';
import arrow_image from '../imgs/arrow_img.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';
import gym_bro from '../imgs/gym_bro.JPG';
import Covid19Photo from '../imgs/Covid19Photo.JPG'
import crepuscolo from '../imgs/crepuscolo.JPG'
import SpiderGame from '../imgs/SpiderGame.JPG';
import { Link } from '@reach/router';

function AboutMe() {

    useEffect(() => {
        const mainNav = document.querySelector('.main-nav');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        hamburgerMenu.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        })
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", parallax);
        function parallax(e){
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX*speed)/100
                const y = (window.innerWidth - e.pageY*speed)/100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    }, []);

    return (
        <div>
            <div className="container-fluid">
            <section className="intro-container">
            <header>
                <div className="nav main-nav">
                    <div className="logo">
                        <Link to="/Portfolio-Website">Michael Remy</Link>
                    </div>
                    <div>
                        <h1>menu</h1>
                    </div>
                    <div className="hamburger-menu">
                        <span className="bar"></span>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/Portfolio-Website">Home</Link>
                        </li>
                        <li className="nav-item">
                        <   Link to="/gym-bro-project">Gym Bro</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/covid-tracker-project">Covid-19 Tracker</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/crepuscolo-project">Crepuscolo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spider-queen-project">Spider Queen</Link>
                        </li>
                    </ul>
                </div>
            </header>
                <div className="row text-center">
                    <div className="col">
                        <div className="wrapper">
                            <div className="box-area">
                                <div className="box-1"></div>
                                <div className="box-2"></div>
                                <div className="box-3"></div>
                                <div className="box-4"></div>
                                <div className="box-5"></div>
                                <div className="box-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="full-name">Michael Remy</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="sub-name pt-4">Full-stack web developer</p>
                    </div>
                </div>
                <div className="row learn-more-container">
                    <div className="col-12">
                        <a href="#about-me-section-scroll"><p className="learn-more">Learn More</p></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a href="#about-me-section-scroll"><img src={arrow_image} alt="" id="arrow-icon"/></a>
                    </div>
                </div>
            </section>
            </div>
            {/* main page ends */}
            <section className="about-me-container">
                <div className="row text-center">
                    <div id="about-me-section-scroll"></div>
                    <div className="col-12">
                        <h1 className="about-me-header">About Me</h1>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12" id="info-text-container">
                        <h5>Hello! I'm Michael a software developer with interest in music, outdoors and reading books.</h5>
                        <h5>I love solving challenging problems that require exceptional critical thinking, and I love to teach others.</h5>
                        <h5>I have huge ambitions and dreams and I am always figuring out the most optimal way to accomplish them.</h5>
                        <h5>I am skilled in three full stacks: Python/Django, MERN, C#/ASP.NET.</h5>
                        <div className="line-bottom"></div>
                    </div>
                </div>
                <div className="row text-center social-media-container">
                    <a href="https://github.com/Michaeldremy" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '57px', marginTop: '8px', color: 'black'}} className="Social-media-mobile"></GitHubIcon></a>
                    <a href="https://www.linkedin.com/in/michaeldremy/" target="_blank" rel="noopener noreferrer" className="Social-media-mobile"><LinkedInIcon style={{fontSize: '75px', color: '#005b8e', marginRight: '3rem', marginLeft: '3rem'}}></LinkedInIcon></a>
                    <a href="mailto:michaeldremy@gmail.com"><MailOutlineIcon style={{fontSize: '75px', color: '#DEF2F1', opacity: '.85'}} className="Social-media-mobile"></MailOutlineIcon></a>
                </div>
                <div id="scroll-container">
                    <div>
                        <a href="#" className="scroll-down"></a>
                    </div>
                    <div className="mouse">
                        <span></span>
                    </div>
                    <div className="arrow">
                        <span></span>
                    </div>
                </div>
            </section>
            {/* about me ends */}
            <section className="container-fluid project-one-container">
                <div className="row">
                    <div className="col-5 gym-bro-image">
                        <a href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><img src={gym_bro} alt=""/></a>
                    </div>
                    <div className="col-7 text-center gym-bro-text">
                        <h1>Gym Bro | Workout stat tracking web app</h1>
                        <h5>
                            Workout tracking web app complete with aesthetic landing page, user login/registration 
                            to allow users to select a daily workout comprising of curated exercise sets, 
                            and view a graphical representation of their workout stats.
                        </h5>
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/Gym_Bro_Python_Project" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '23px', color: '#feffff', marginBottom: '6px'}}></GitHubIcon></a> | <a href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">View Live Website</a> | <Link to="/gym-bro-project">View Project Demo</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* project one ends */}
            <section className="container-fluid project-two-container">
                <div className="row">
                    <div className="col-7 text-center covid-image-text">
                        <h1>Covid-19 Tracker | Real-time Case tracking</h1>
                        <h5>
                            Completely responsive data visualization wep application that has daily updates to track infected, recovered and deaths over 100+ countries. 
                        </h5>
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/COVID-19-Tracker-Application" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '23px', color: '#feffff', marginBottom: '6px'}}></GitHubIcon></a> | <a href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer">View Live Website</a> | <Link to="/covid-tracker-project">View Project Demo</Link>
                        </p>
                    </div>
                    <div className="col-5 covid-image">
                        <a href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer"><img src={Covid19Photo} alt=""/></a>
                    </div>
                </div>
            </section>
            {/* project two ends */}
            <section className="container-fluid project-three-container">
                <div className="row">
                    <div className="col-5 crepuscolo-image">
                        <a href="https://michaeldremy.github.io/The-Crepuscolo/index.html" target="_blank" rel="noopener noreferrer"><img src={crepuscolo} alt=""/></a>
                    </div>
                    <div className="col-7 text-center crepuscolo-text">
                        <h1>The Crepuscolo | Restaurant Landing Page</h1>
                        <h5>
                            Italian restaurant landing page that is completely responsive 
                            and has beautiful animations creating an appetizing user experience.
                        </h5>
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/The-Crepuscolo" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '23px', color: '#feffff', marginBottom: '6px'}}></GitHubIcon></a> | <a href="https://michaeldremy.github.io/The-Crepuscolo/" target="_blank" rel="noopener noreferrer">View Live Website</a> | <Link to ="/crepuscolo-project">View Project Demo</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* project three ends */}
            <section className="container-fluid project-four-container">
                <div className="row">
                    <div className="col-7 text-center spider-image-text">
                        <h1>Spider Queen | FPS Game</h1>
                        <h5>
                            First-person shooter game created with C# and Unity. Goal of the game is to complete objectives and defeat the spider queen by solving puzzles.
                        </h5>
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '23px', color: '#feffff', marginBottom: '6px'}}></GitHubIcon></a> | <a href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer">View Live Game</a> | <Link to ="/spider-queen-project">View Project Demo</Link>
                        </p>
                    </div>
                    <div className="col-5 spider-image">
                        <a href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer"><img src={SpiderGame} alt=""/></a>
                    </div>
                </div>
            </section>
            {/* project four ends */}
            <section className="container-fluid resume-container">
                <div className="row">
                    <div className="col-12">
                        <h1>Resume</h1>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="row resume-links">
                    <div className="col-12 pb-4">
                        <a href="https://github.com/Michaeldremy/Portfolio-Website/blob/local-branch/client/src/components/michael-remy-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                    <div className="col-12">
                        <a href="../components/michael-remy-resume.pdf" download>Download my resume</a>
                    </div>
                </div>
            </section>
            {/* resume ends */}
            <section className="container-fluid contact-footer-container">
                <div className="row contact-container">
                    <div className="col-6 contact-text">
                        <h1>Contact</h1>
                        <p>For more information, please contact me by e-mail or LinkedIn Message. Thank you!</p>
                    </div>
                    <div className="col-6 contact-social-links">
                        <a href="mailto:michaeldremy@gmail.com" className="email-button" target="_blank" rel="noopener noreferrer">email</a>
                        <a href="https://www.linkedin.com/in/michaeldremy/" className="linkedin-button" target="_blank" rel="noopener noreferrer">linkedin</a>
                    </div>
                </div>
                <div className="row footer-container">
                    <div className="col-12">
                    <a href="https://github.com/Michaeldremy" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '30px', marginTop: '1px', color: 'white', opacity: '.6'}}></GitHubIcon></a>
                    <a href="https://www.linkedin.com/in/michaeldremy/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{fontSize: '34px', color: 'white', opacity: '.6', marginRight: '2rem', marginLeft: '2rem'}}></LinkedInIcon></a>
                    <a href="mailto:michaeldremy@gmail.com"><MailOutlineIcon style={{fontSize: '33px', color: 'white', opacity: '.7', marginBottom: '2px'}}></MailOutlineIcon></a>
                    </div>
                    <div className="col-12">
                        <h1><CopyrightIcon style={{fontSize: '17px', marginRight: '10px', marginBottom: '2px'}}></CopyrightIcon>Michael Remy</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;