import React, {useEffect} from 'react';
import '../views/styles/AboutMe.css';
import csharp from '../imgs/csharp.png'
import css from '../imgs/css.png'
import html from '../imgs/html.png'
import reactimg from '../imgs/reactimg.png'
import redux from '../imgs/redux.png'
import python from '../imgs/python.png'
import django from '../imgs/django.png'

function AboutMe() {

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
            <section id="SectionAboutMe">
                <img src={reactimg} alt="" data-speed="3" className="layer"/>
                <img src={django} alt="" data-speed="2" className="layer"/>
                <img src={redux} alt="" data-speed="2" className="layer"/>
                <img src={html} alt="" data-speed="-3" className="layer"/>
                <img src={css} alt="" data-speed="5" className="layer"/>
                <img src={python} alt="" data-speed="-3" className="layer"/>
                <img src={csharp} alt="" data-speed="-4" className="layer"/>
                <h3 className="" data-speed="1">Michael Remy</h3>
            </section>
        </div>
    )
}

export default AboutMe;
