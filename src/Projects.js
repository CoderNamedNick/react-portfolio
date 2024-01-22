import React from "react";
import Project1 from './Screenshot 2024-01-22 172206.png'
import "./Projects.css"

class Projects extends React.Component {
  render () {
    return (
      <div className="PRJ-main-div">
        <div className="First-PRJ">
          <img className="Project-Pics" src={Project1} alt=""></img>
          <div className="PRJ-descr-div">
            <h1>Hidive Clone</h1>
            <h3>LINK</h3>
            <p className="p-descr">
              This is My favorite project! I wanted to do something not only 
              Original.. As in NO tutorials how to do it, but i wanted to make something big with 
              Pure vanilla Javascript. this by far took th longest but im most proud of it!
            </p>
          </div>
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