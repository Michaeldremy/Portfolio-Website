import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sections from './views/Sections';
import {Router} from '@reach/router';
import GymBroProjectPage from './components/GymBroProjectPage';
import CovidTrackerProjectPage from './components/CovidTrackerProjectPage';
import CrepuscoloProjectPage from './components/CrepuscoloProjectPage';
import SpiderQueenProjectPage from './components/SpiderQueenProjectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Sections path="/Portfolio-Website" />
        <GymBroProjectPage path="/gym-bro-project"/>
        <CovidTrackerProjectPage path="/covid-tracker-project"/>
        <CrepuscoloProjectPage path="/crepuscolo-project"/>
        <SpiderQueenProjectPage path="/spider-queen-project"/>
      </Router>
    </div>
  );
}

export default App;
