import React from "react";
import './animista.css'
import "./Intro.css"
import Urabe from "./Urabe.png"

class Intro extends React.Component{
  render() {
    return (
      <div className="Intro-main-Div color-change-2x">
        <div>
          <img className="heartbeat" src={Urabe} alt="HandsomeMan"></img>
        </div>
        <div className="Div2">
          <h1>Nicholas Lloyd</h1>
          <h1>Junior Web Developer</h1>
          <h2>Niles,MI</h2>
          <a><h5>GITHUB</h5></a>
          <a><h5>My Favorite Project</h5></a>
        </div>
      </div>
    )
  }
}

export default Intro