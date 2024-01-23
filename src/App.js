import React from 'react';
import Intro from './Intro';
import AboutMe from './AboutMe';
import PreviousJobs from './PreviousJobs';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
          <Intro />
          <AboutMe />
          <PreviousJobs />
          <Projects />
        <Footer />
    </div>
  );
}

export default App;
