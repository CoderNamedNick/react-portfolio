import React from "react";
import './animista.css'
import "./Intro.css"
import Urabe from "./Urabe.png"

class Intro extends React.Component{
  render() {
    return (
      <div>
        <div id="intro" className="Intro-main-Div color-change-2x">
          <div>
            <img className="heartbeat profile-Pic" src={Urabe} alt="HandsomeMan"></img>
          </div>
          <div className="Div2">
            <h1>Nicholas Lloyd</h1>
            <h1>Junior Web Developer</h1>
            <h2>Niles,MI</h2>
            <a className="GithubLink" href="https://github.com/CoderNamedNick"><h5>GITHUB</h5></a>
            <a><h5>My Favorite Project</h5></a>
          </div>
        </div>
        <div className="Div3">
          <h1>Skills</h1>
          {/* make logos and other Skills here */}
        </div>
      </div>
    )
  }
}

export default Intro