import React, {useEffect} from 'react';
import '../views/styles/AboutMe.css';
import '../views/styles/ProjectPage.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ReactPlayer from 'react-player/youtube';

function SpiderQueenProjectPage() {

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
                        <h1>SPIDER QUEEN | FPS GAME</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Github: <a href="https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '1.8rem', color: 'black'}}></GitHubIcon></a>
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
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
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
                            <li className="detail-points">First-person shooter game created with C# and Unity. Goal of the game is to complete objectives and defeat the spider queen by solving puzzles.</li>
                            <li className="detail-points">Designed and developed environment within the game, created animations and wrote scripts using object-orientated programming with C#</li>
                            <li className="detail-points">Coverted JavaScript into C# to create optimization, developer readability and game functionality</li>
                            <li className="detail-points">Facilitated distribution of work among developers to ensure completion of project in given time alloted.</li>
                            <li className="detail-points">Technologies Used: C#, JavaScript, Unity, Diffmerge, Github</li>
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

export default SpiderQueenProjectPage;
