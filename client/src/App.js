import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sections from './views/Sections';
import GymBroProjectPage from './components/GymBroProjectPage';
import CovidTrackerProjectPage from './components/CovidTrackerProjectPage';
import CrepuscoloProjectPage from './components/CrepuscoloProjectPage';
import SpiderQueenProjectPage from './components/SpiderQueenProjectPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <div>
          <Route exact path="/" component={Sections} />
          <Route path="/gym-bro-project" component={GymBroProjectPage}/>
          <Route path="/covid-tracker-project" component={CovidTrackerProjectPage}/>
          <Route path="/crepuscolo-project" component={CrepuscoloProjectPage}/>
          <Route path="/spider-queen-project" component={SpiderQueenProjectPage}/>

          {/* <Route path="/about" component={About} /> */}
        </div>
      </BrowserRouter>
      {/* <HashRouter basename="/"> */}
        {/* <Sections path="/Portfolio-Website" /> */}
        {/* <Route exact path="/gym-bro-project" component={GymBroProjectPage}/>
        <CovidTrackerProjectPage path="/covid-tracker-project"/>
        <CrepuscoloProjectPage path="/crepuscolo-project"/>
        <SpiderQueenProjectPage path="/spider-queen-project"/>
      </HashRouter> */}
    </div>
  );
}

export default App;
