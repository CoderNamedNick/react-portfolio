import React from "react";
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="list-div">
          <li>About Me</li>
          <li>Previous Jobs</li>
          <li>Web Dev Journey</li>
          <li>Projects</li>
        </div>
      </div>
    )
  }
}

export default Header