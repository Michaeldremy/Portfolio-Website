import React, {useEffect} from 'react';
import '../views/styles/AboutMe.css';
import '../views/styles/ProjectPage.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ReactPlayer from 'react-player/youtube';

function CovidTrackerProjectPage() {

    useEffect(() => {
        const mainNav = document.querySelector('.main-nav');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        hamburgerMenu.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        })
    }, []);

    return (
        <div>
            <header>
            <div className="nav main-nav">
                    <div className="logo">
                        <a href="/Portfolio-Website">Michael Remy</a>
                    </div>
                    <div>
                        <h1>menu</h1>
                    </div>
                    <div className="hamburger-menu">
                        <span className="bar"></span>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/Portfolio-Website">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/gym-bro-project">Gym Bro</a>
                        </li>
                        <li className="nav-item">
                            <a href="/covid-tracker-project">Covid Tracker</a>
                        </li>
                        <li className="nav-item">
                            <a href="/crepuscolo-project">Crepuscolo</a>
                        </li>
                        <li className="nav-item">
                            <a href="/spider-queen-project">Spider Queen</a>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="title-container">
                <div className="parallax">
                <div className="row">
                    <div className="col-12">
                        <h1>COVID-19 TRACKER | REAL-TIME CASE TRACKING</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/COVID-19-Tracker-Application" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '1.8rem', color: 'black'}}></GitHubIcon></a>
                        </p>
                    </div>
                </div>
                </div>
            </section>
            <section className="project-details-container">
                <div className="row">
                    <div className="col-12">
                        <h2>DEMO</h2>
                    </div>
                </div>
                <div className="row">
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=m99r-Eo7MM0&feature=youtu.be'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="line-bottom-video"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h6>DETAILS</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 detail-points-container">
                        <ul>
                            <li className="detail-points">Full-stack web development using MERN (MongoDB, Express, React, Node.js) to create a completely responsive data visualization website to track COVID-19 information</li>
                            <li className="detail-points">Implemented COVID-19 API for real-time updates and to create data visualization with ChartJS</li>
                            <li className="detail-points">Created reusable Material-UI components using HTML, CSS and JavaScript, that allowed for easy reusability and functionality</li>
                            <li className="detail-points">Technologies Used: React, JavaScript, HTML/CSS3, ChartJS, Node.js, Express.js and Material-UI</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
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

export default CovidTrackerProjectPage;
