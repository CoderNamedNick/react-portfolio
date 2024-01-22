import React from "react";
import Project1 from './Screenshot 2024-01-22 172206.png'

class Projects extends React.Component {
  render () {
    return (
      <div>
        <div className="First-PRJ">
          <img className="Project-Pics" src={Project1} alt="Hidive Project"></img>
          <h2>Hidive Clone</h2>
          <h3>LINK</h3>
          <p>
            This is My favorite project! I wanted to do something Not only 
            Original.. As in NO tutorials how to do it, but i wanted to make something big with 
            Pure vanilla Javascript. this by far took th longest but im most proud of it!
          </p>
        </div>
        <div className="Second-PRJ">
          <img src="" alt="Hidive Project"></img>
          <h2>Project Name</h2>
          <h3>LINK</h3>
          <p>project description</p>
        </div>
      </div>
    );
  }
}

export default Projects