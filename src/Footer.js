import React from "react";

class Footer extends React.Component {
  render() {
    const li3 = `Social Media i Never use => `
  
    return (
      <div className="Footer-div">
        <li><a href="https://github.com/CoderNamedNick">GitHub</a></li>
        <li><a href="mailto:nclloyd422@hotmail.com">Email</a></li>
        <li>{li3}</li>
        <li>Facebook</li>
      </div>
    );
  }
}

export default Footer