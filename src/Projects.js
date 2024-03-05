import React from "react";
import Project1 from './images/Screenshot 2024-01-22 172206.png'
import Project2 from './images/Screenshot 2024-01-22 175507.png'
import "./Projects.css"

class Projects extends React.Component {
  render () {
    return (
      <div className="PRJ-main-div">
        <h1 className="pj-h1">PROJECTS</h1>
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
          <img className="Project-Pics" src={Project2} alt="Hidive Project"></img>
          <div className="PRJ-descr-div">
            <h2>RoboFriends</h2>
            <h3>LINK</h3>
            <p >
              Everyone Has to start somewhere. this was my first look at react and i didn't understand much
              I still wanna put it in my portfolio because it was a good first Stepping Stone.
              And it still holds with the fundementals of react.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects