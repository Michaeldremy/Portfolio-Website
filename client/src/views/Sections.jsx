import React, { useEffect } from 'react';
import './styles/SectionsStyle.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import AboutMe from '../components/AboutMe';

const Sections = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <div>
            {/* <div id="NavBar" className="row text-center">
                <div className="col-4">
                    <a href="#sec1">Michael Remy</a>
                </div>
                <div className="col-4">
                    <a href="#sec2">Projects</a>
                </div>
                <div className="col-4">
                    <a href="#sec3">Contact</a>
                </div>
            </div> */}
            <section id="sec1">
                <AboutMe />
            </section>
            {/* <section id="sec3">
                <ContactUs />
            </section> */}
        </div>
    );
};

export default Sections;