import React from "react";
import Project1 from './images/Screenshot 2024-01-22 172206.png'
import Project2 from './images/Screenshot 2024-01-22 175507.png'
import Project3 from './images/Screenshot 2024-03-05 121010.png'
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
            <h3>Repository</h3>
            <p className="p-descr">
              This is My favorite project! I wanted to do something not only 
              Original.. As in NO tutorials how to do it, but i wanted to make something big with 
              Pure vanilla Javascript. this by far took th longest but im most proud of it!
            </p>
          </div>
        </div>
        <div className="Second-PRJ">
          <img className="Project-Pics" src={Project3} alt="Rpg game Project"></img>
          <div className="PRJ-descr-div">
            <h2>React RPG GAME</h2>
            <h3><a href="https://codernamednick.github.io/RPG-react-game/">LINK</a></h3>
            <h3>Repository</h3>
            <p >
              I wanted to make a game so that people can interact and give me feed back. Im not a game developer
              but i wanted to make something with react that atleast i havent seen before or neither have you.
              This is my first big react app with many different components. Please try and Play it.
            </p>
          </div>
        </div>
        <div className="Second-PRJ">
          <img className="Project-Pics" src={Project2} alt="Robofriends Project"></img>
          <div className="PRJ-descr-div">
            <h2>RoboFriends</h2>
            <h3>Repository</h3>
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