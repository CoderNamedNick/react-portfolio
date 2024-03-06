import React from "react";
import './animista.css'
import Pic from "./images/portfolio pic2.jpeg"
import GitHubLogo from './icons/icons8-github-48.png'
import GitLogo from './icons/icons8-git-96.png'
import VSLogo from './icons/icons8-vs-code-96.png'
import htmlLogo from './icons/icons8-html-96.png'
import cssLogo from './icons/icons8-css-96.png'
import JsLogo from './icons/icons8-javascript-96.png'
import ReactLogo from './icons/icons8-react-js-80.png'
import NodeLogo from './icons/icons8-node-js-96.png'
import NpmLogo from './icons/icons8-npm-96.png'

class Intro extends React.Component{
  render() {
    return (
      <div>
        <div id="intro" className="Intro-main-Div color-change-2x">
          <div>
            <img className="heartbeat profile-Pic" src={Pic} alt="HandsomeMan"></img>
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
          <img className="Logos" src={GitHubLogo}></img>
          <img className="Logos" src={GitLogo}></img>
          <img className="Logos" src={VSLogo}></img>
          <img className="Logos" src={htmlLogo}></img>
          <img className="Logos" src={cssLogo}></img>
          <img className="Logos" src={JsLogo}></img>
          <img className="Logos" src={ReactLogo}></img>
          <img className="Logos" src={NodeLogo}></img>
          <img className="Logos" src={NpmLogo}></img>
          {/* make logos and other Skills here */}
        </div>
      </div>
    )
  }
}

export default Intro