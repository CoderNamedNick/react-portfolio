import React from "react";
import "./Intro.css"
import Urabe from "./Urabe.png"

class Intro extends React.Component{
  render() {
    return (
      <div className="Intro-main-Div">
        <div>
          <img src={Urabe} alt="HandsomeMan"></img>
        </div>
        <div className="Div2">
          <h1>Nicholas Lloyd</h1>
          <h1>Junior Web Developer</h1>
          <h2>Niles,MI</h2>
        </div>
      </div>
    )
  }
}

export default Intro