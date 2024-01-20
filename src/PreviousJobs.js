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
      1: `In Cassopolis, MI. since making this the place has closed down I started working there at 15 while in school.
        What i feel i Learned was the work force and Customer Service as well as the rush a job has.
      `,
      2: `In Niles, MI, Also Closed down I worked for a short time delivering pizzas. 
        Soon Covid would hit and they closed down for good. This made me Learn deadlines and how to manage my time wisely
        between school and work
      `,
      3: `In Niles, MI. This place is Still Alive! Working here i was dealing with stress from graduating school and work.
        Here i learned that co-workers are not all good people (Work Place Drama), but I also learned to not fight but to Compromise.
      `,
      4: `The Hospital in Niles, MI. This was my first real job after turning 18, I was Incharge of BioHazards and Trash
        Although it was a "Trashy Job" I learned better customer service and Self Improvement. Here I learned Code (on my free time).

      `,
    };
    const jobNames = {
      1: `Marcello's Pizza| 2-years`,
      2: `Gina's Pizza| 6-Months`,
      3: `Subway| 8-months`,
      4: `Corewell Health| 2-years`
    };

    return (
      <div className="Main-PJ-Div">
        <button className="PJ-BTN shadow-drop-2-center" onClick={this.handleButtonClick}>Previous Jobs</button>

        {[1, 2, 3, 4].map((jobNumber) => (
          <div key={jobNumber} style={{ display: this.state.visibleJob === jobNumber ? "block" : "none" }}>
            <h3>Job {jobNumber}</h3>
            <br></br>
            <h2>{jobNames[jobNumber]}</h2>
            <p>{jobDescriptions[jobNumber]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PreviousJobs;