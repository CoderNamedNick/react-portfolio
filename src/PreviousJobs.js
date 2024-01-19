import React, { Component } from "react";

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
      1: "Description for Job 1. This is a great opportunity to showcase your skills.",
      2: "Description for Job 2. Join our team and be a part of exciting projects.",
      3: "Description for Job 3. We are looking for motivated individuals to join us.",
      4: "Description for Job 4. Explore new challenges and grow with us.",
    };

    return (
      <div>
        <button onClick={this.handleButtonClick}>Previous Jobs</button>

        {[1, 2, 3, 4].map((jobNumber) => (
          <div key={jobNumber} style={{ display: this.state.visibleJob === jobNumber ? "block" : "none" }}>
            <h3>Job {jobNumber}</h3>
            <p>{jobDescriptions[jobNumber]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PreviousJobs;