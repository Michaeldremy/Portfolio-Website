import React from 'react';
import {Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import VoiceNewsDemoPage from './pages/VoiceNewsDemoPage';
import { CovidTrackerDemoPage } from './pages/CovidTrackerDemoPage';
import CrepuscoloDemoPage from './pages/CrepuscoloDemoPage';
import GymBroDemoPage from './pages/GymBroDemoPage';
import SpiderQueenDemoPage from './pages/SpiderQueenDemoPage';
import Sections from './views/Sections';
import ScrolltToTop from './components/ScrollToTop';
import TruStockDemoPage from './pages/TruStockDemoPage';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
        <div>
          <Route exact path="/Home" component={Sections} />
          <ScrolltToTop />
          <Route path="/gym-bro-project" component={GymBroDemoPage}/>
          <Route path="/covid-tracker-project" component={CovidTrackerDemoPage}/>
          <Route path="/crepuscolo-project" component={CrepuscoloDemoPage}/>
          <Route path="/spider-queen-project" component={SpiderQueenDemoPage}/>
          <Route path="/voice-news-project" component={VoiceNewsDemoPage}/>
          <Route path="/trustock-project" component={TruStockDemoPage}/>
        </div>
    </div>
  );
}

export default App;
