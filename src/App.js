import React from 'react';
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
          <PreviousJobs />
          <CodingJourney />
          <Projects />
        <Footer />
    </div>
  );
}

export default App;
