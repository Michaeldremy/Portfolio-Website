import React from 'react';
import './styles/SectionsStyle.css';
import Covid19PhotoR from '../imgs/Covid19PhotoR.png';
import SpiderGame from '../imgs/SpiderGame.JPG';
import ContactUs from '../components/ContactForm.js';
import page1resume from '../imgs/page1resume.JPG';
import page2resume from '../imgs/page2resume.JPG';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import gym_bro from '../imgs/gym_bro.JPG';
import AboutMe from '../components/AboutMe';
import Pulse from 'react-reveal/Pulse';

const Sections = () => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 450,
            marginRight: "auto",
            marginLeft: "auto", 
            marginTop: "16%",
            backgroundColor: "rgb(250,250,250)"
        },
        media: {
            height: 277
        },
        info: {
            marginTop: "5%",
        }
    });

    const classes = useStyles();

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
                <AboutMe/>
            </section>
            <section id="sec2">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <div className="boxDeploy">
                        <Pulse>
                        <p className={classes.info}>Click on the photos to go to the deployed websites!</p>
                        </Pulse>
                        </div>
                    </div>
                </div>
                <div id="section2" className="row text-center">
                    <div className="col-md-4">
                        <Card className={classes.root}>
                            <CardActionArea href="http://michaeldremy.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={gym_bro}
                                    title="Gym Bro"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Gym Bro
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        Intuitive gym progress tracking website
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <p><a href="https://github.com/Michaeldremy/Gym_Bro_Python_Project" target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 btn btn-dark">See Code</button></a></p>
                    </div>
                    <div className="col-md-4">
                    <Card className={classes.root} >
                            <CardActionArea href="https://connect.unity.com/mg/other/untitled-6364" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={SpiderGame}
                                    title="Spider Game"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Spider Queen Vol 1.
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        Game created within Unity
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <p><a href="https://github.com/Michaeldremy/Spider-Queen-Vol-1-C-Sharp-Project" target="_blank" rel="noopener noreferrer"><button className="mt-4 btn btn-dark">See Code</button></a></p>
                    </div>
                    <div className="col-md-4">
                    <Card className={classes.root}>
                            <CardActionArea href="https://michaeldremy.github.io/COVID-19-Tracker-Application/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={Covid19PhotoR}
                                    title="Covid 19 Photo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Covid Tracker
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        Covid-19 data visualization website
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <p><a href="https://github.com/Michaeldremy/COVID-19-Tracker-Application/tree/master" target="_blank" rel="noopener noreferrer"><button className="mt-4 btn btn-dark">See Code</button></a></p>
                    </div>
                </div>
                <div id="section2" className="row text-center pt-5">
                    <div className="col-md-12">
                        {/* <h3>Tweet Me</h3>
                        <p>Twitter Inspired Application</p>
                        <p className="pt-4">Coming Soon...</p>
                        <a href="www.google.com" target="_blank" rel="noopener noreferrer"><img src="" alt="" /></a>
                        <p><a href="https://github.com/Michaeldremy/tweetme" target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary">See Code</button></a></p> */}
                    </div>
                </div>
            </section>
            <section id="sec2-5">
                <div className="row text-center pt-5">
                    <div className="col-6 pt-3"><img src={page1resume} alt="" id="section2-5" /></div>
                    <div className="col-6 pt-4"><img src={page2resume} alt="" id="section2-5" /></div>
                </div>
            </section>
            <section id="sec3">
                <ContactUs />
            </section>
        </div>
    );
};

export default Sections;