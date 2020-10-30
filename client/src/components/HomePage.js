import React from 'react';
import '../views/styles/HomePage.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';

// images
import gym_bro from '../imgs/gym_bro.JPG';
import gym_bro_2 from '../imgs/gym_bro_2.JPG';
import gym_bro_3 from '../imgs/gym_bro_3.JPG';
import Covid19Photo from '../imgs/Covid19Photo.JPG'
import Covid19Photo_2 from '../imgs/Covid19Photo_2.JPG';
import Covid19Photo_3 from '../imgs/Covid19Photo_3.JPG';
import crepuscolo from '../imgs/crepuscolo.JPG'
import crepuscolo_2 from '../imgs/crepuscolo_2.JPG'
import crepuscolo_3 from '../imgs/crepuscolo_3.JPG'
import SpiderGame from '../imgs/SpiderGame.JPG';
import alan_ai_news from '../imgs/alan_ai_news.JPG';
import alan_ai_news_2 from '../imgs/alan_ai_news_2.JPG';
import alan_ai_news_3 from '../imgs/alan_ai_news_3.JPG';

// App components
import ProjectModal from './Projects/ProjectModal';
import NavBar from './Navigation/NavBar';
import Contact from './Contact';
import ResumeSection from './ResumeSection';
import Intro from './First-Impressions/Intro';

function HomePage() {

    return (
        <div>
            <NavBar />
            <Intro />
            {/* main page ends */}
            <section className="about-me-container" id="about-me">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="about-me-header">About Me</h1>
                        <div className="col-6 line"></div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12" id="info-text-container">
                        <h5>Hello! I'm Michael a software developer with interest in music, outdoors and reading books.</h5>
                        <h5>I love solving challenging problems that require exceptional critical thinking, and I love to teach others.</h5>
                        <h5>I have huge ambitions and dreams and I am always figuring out the most optimal way to accomplish them.</h5>
                        <h5>I am skilled in three full stacks: Python/Django, MERN, C#/ASP.NET.</h5>
                        <div className="col-6 line-bottom"></div>
                    </div>
                </div>
                <div className="row text-center social-media-container">
                    <div className="col d-none d-lg-block d-xl-none">
                    </div>
                    <div className="col">
                        <a href="https://github.com/Michaeldremy" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '55px', marginTop: '0px', color: 'black'}} className="Social-media-mobile"></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/michaeldremy/" target="_blank" rel="noopener noreferrer" className="Social-media-mobile"><LinkedInIcon style={{fontSize: '75px', color: '#005b8e', marginRight: '3rem', marginLeft: '3rem'}}></LinkedInIcon></a>
                        <a href="mailto:michaeldremy@gmail.com"><MailOutlineIcon style={{fontSize: '76px', color: '#DEF2F1', opacity: '.85', marginBottom: '3px', marginRight: '7px'}} className="Social-media-mobile"></MailOutlineIcon></a>
                    </div>
                    <div className="col d-none d-lg-block d-xl-none">
                    </div>
                </div>
                <div id="scroll-container">
                    <div>
                        <a href="#" className="scroll-down"></a>
                    </div>
                    <div className="mouse">
                        <span></span>
                    </div>
                </div>
            </section>
            {/* about me ends */}
            <div style={{ background: '#17252a'}} className="project-section" id="projects">
                <h1 className="project-h1">Projects</h1>
                <ProjectModal 
                projectCardName={"Gym Bro"}
                projectCardImage={gym_bro}
                projectCardDeployedSiteUrl={"http://michaeldremy.pythonanywhere.com/"}
                imageOne={gym_bro}
                imageTwo={gym_bro_2}
                imageThree={gym_bro_3}
                projectTitle={"Gym Bro | Workout stat tracking web app"}
                projectDescription={"Select from a list of weightlifting or cardio exercises and record your workout. You can then view your progress by going to the profile page and then clicking on the workout you want to see progress of."}
                githubLink={"https://github.com/Michaeldremy/Gym_Bro_Python_Project"}
                liveWebsiteUrl={"http://michaeldremy.pythonanywhere.com/"}
                demoPageUrl={"#/gym-bro-project"}
                />
            {/* project one ends */}
            <ProjectModal
                projectCardName={"Covid-19 Tracker"}
                projectCardImage={Covid19Photo}
                projectCardDeployedSiteUrl={"https://michaeldremy.github.io/COVID-19-Tracker-Application/"}
                imageOne={Covid19Photo_3}
                imageTwo={Covid19Photo_2}
                imageThree={Covid19Photo}
                projectTitle={"Covid-19 Tracker | Real-time Case tracking"}
                projectDescription={"This application is a great tool you can bookmark that gives you the ability to check covid-19 cases in 100+ countries. The data is shown in a bar graph or line graph."}
                githubLink={"https://github.com/Michaeldremy/COVID-19-Tracker-Application"}
                liveWebsiteUrl={"https://michaeldremy.github.io/COVID-19-Tracker-Application/"}
                demoPageUrl={"#/covid-tracker-project"}
                />
            {/* project two ends */}
            <ProjectModal
                projectCardName={"Crepuscolo"}
                projectCardImage={crepuscolo}
                projectCardDeployedSiteUrl={"https://michaeldremy.github.io/The-Crepuscolo/"}
                imageOne={crepuscolo_2}
                imageTwo={crepuscolo}
                imageThree={crepuscolo_3}
                projectTitle={"The Crepuscolo | Restaurant Landing Page"}
                projectDescription={"Italian restaurant landing page that is completely responsive and has beautiful animations creating an appetizing user experience."}
                githubLink={"https://github.com/Michaeldremy/The-Crepuscolo"}
                liveWebsiteUrl={"https://michaeldremy.github.io/The-Crepuscolo/"}
                demoPageUrl={"#/crepuscolo-project"}
                />
            {/* project three ends */}
            <ProjectModal
                projectCardName={"Spider Queen"}
                projectCardImage={SpiderGame}
                projectCardDeployedSiteUrl={"https://connect.unity.com/mg/other/untitled-6364"}
                imageOne={SpiderGame}
                imageTwo={SpiderGame}
                imageThree={SpiderGame}
                projectTitle={"Spider Queen | FPS Game"}
                projectDescription={"First-person shooter game created with C# and Unity. Goal of the game is to complete objectives and defeat the spider queen by solving puzzles."}
                githubLink={"https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project"}
                liveWebsiteUrl={"https://connect.unity.com/mg/other/untitled-6364"}
                demoPageUrl={"#/spider-queen-project"}
                />
            {/* project four ends */}
            <ProjectModal
                projectCardName={"Voice News"}
                projectCardImage={alan_ai_news}
                projectCardDeployedSiteUrl={"https://alan-ai-news-application.herokuapp.com/"}
                imageOne={alan_ai_news_2}
                imageTwo={alan_ai_news}
                imageThree={alan_ai_news_3}
                projectTitle={"Voice News"}
                projectDescription={"This application allows the user to get different news topics strictly through using your voice. You can tell the AI go back, read off the article headlines or tell it open articles."}
                githubLink={"https://github.com/Michaeldremy/React-Alan-AI-News-Application"}
                liveWebsiteUrl={"https://alan-ai-news-application.herokuapp.com/"}
                demoPageUrl={"#/voice-news-project"}
                />
            {/* project five ends */}
            </div>
            <ResumeSection />
            <section className="container-fluid contact-footer-container">
            <Contact />
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

export default HomePage;