import React, { useEffect } from "react";

import '../../views/styles/HomePage.css';

const NavBar = () => {

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
            <a href="#/Home">Michael Remy</a>
          </div>
          <div>
            <h1>menu</h1>
          </div>
          <div className="hamburger-menu">
            <span className="bar"></span>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#/Home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#/gym-bro-project">Gym Bro</a>
            </li>
            <li className="nav-item">
              <a href="#/covid-tracker-project">Covid Tracker</a>
            </li>
            <li className="nav-item">
              <a href="#/crepuscolo-project">Crepuscolo</a>
            </li>
            <li className="nav-item">
              <a href="#/spider-queen-project">Spider Queen</a>
            </li>
            <li className="nav-item">
              <a href="#/voice-news-project">Voice News</a>
            </li>
            <li className="nav-item">
              <a href="#/trustock-project">TruStock</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
