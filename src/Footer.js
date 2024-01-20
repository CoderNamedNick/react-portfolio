import React from "react";
import "./Footer.css"

class Footer extends React.Component {
  render() {
    const li3 = `Social Media i Never use => `
  
    return (
      <div className="Footer-div">
        <li><a>GitHub</a></li>
        <li>Email</li>
        <li>{li3}</li>
        <li>Facebook</li>
      </div>
    );
  }
}

export default Footer