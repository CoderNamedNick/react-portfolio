import React, { Component } from "react";
import "./PreviousJobs.css"
import "./animista.css"

class PreviousJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleJob: 0,
    };
  }

  handleButtonClick = () => {
    const { visibleJob } = this.state;
    const nextJob = (visibleJob % 4) + 1;
    this.setState({ visibleJob: nextJob });
  };

  render() {
    const jobDescriptions = {
      1: `A place in Cassopolis, MI, which unfortunately has since closed down, 
        I began working at the age of 15 while still in school. This experience provided me with valuable
        lessons in the workforce, customer service, and the fast-paced nature of job responsibilities.
      `,
      2: `During a brief stint in Niles, MI, I worked at a pizza delivery service that, regrettably, closed down after the onset of Covid. This experience taught
       me the importance of meeting deadlines and honing effective time management skills, especially while juggling the demands of both school and work.
      `,
      3: `
      In Niles, MI, I worked at a place that's still alive. Balancing school and work during my graduation period brought its own set of challenges,
       including dealing with workplace stress. It was an eye-opener about the differences among co-workers,
       sometimes involving workplace drama. I learned to navigate these situations by prioritizing compromise over conflict.
      `,
      4: `At the hospital in Niles, MI, I secured my first substantial job after turning 18,
       taking on responsibilities related to Biohazards and Trash. Despite the nature of the job, which some might describe as "trashy,"
        I gained valuable insights into customer service and embarked on a journey of self-improvement.
       In my free time at the hospital, I also delved into coding, further expanding my skill set.
      `,
    };
    const jobNames = {
      1: `Marcello's Pizza| 2-years`,
      2: `Gina's Pizza| 6-Months`,
      3: `Subway| 8-months`,
      4: `Corewell Health| 2-years`
    };

    return (
      <div id="previousjobs" className="Main-PJ-Div">
        <button className="PJ-BTN shadow-drop-2-center" onClick={this.handleButtonClick}>Previous Jobs</button>

        {[1, 2, 3, 4].map((jobNumber) => (
          <div className="PJ-div" key={jobNumber} style={{ display: this.state.visibleJob === jobNumber ? "block" : "none" }}>
            <h3>Job {jobNumber}</h3>
            <br></br>
            <h2>{jobNames[jobNumber]}</h2>
            <p className="p-description">{jobDescriptions[jobNumber]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PreviousJobs;