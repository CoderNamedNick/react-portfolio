import React from 'react';
import './index.css'
import Intro from './Intro';
import AboutMe from './AboutMe';
import PreviousJobs from './PreviousJobs';
import CodingJourney from './CodingJourney';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
          <Intro />
          <AboutMe />
          <Projects />
          <PreviousJobs />
          <CodingJourney />
        <Footer />
    </div>
  );
}

export default App;
