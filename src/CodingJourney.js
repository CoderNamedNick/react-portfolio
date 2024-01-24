import React from "react";

class CodingJourney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      showParagraph: !prevState.showParagraph,
    }));
  };

  render() {
    return (
      <div className="Main-PJ-Div">
        <button className="PJ-BTN shadow-drop-2-center" onClick={this.handleButtonClick}>Coding Journey</button>
        {this.state.showParagraph && (
          <div className="PJ-div">
            <p className="p-description">
              I've always been fond of computers since young, but my family could never afford one. In high school, I got into gaming.
              From there, I wanted to know more, so I took an Information Technology course online from WGU academy.
              Sadly, I failed the test that I needed to take the full course, so I gave up. In my self-pity, 
              I started to watch coding videos and game developer videos and just thought "I could never do that."
              Then I went to YouTube and tried learning Python. Being one of the easiest coding languages to learn, I felt hopeless
              because I couldn't even learn the "easy one." After some time, I decided to try again but this time with JavaScript.
              Starting with HTML was hard and CSS harder. But after weeks, I finally felt ready for JavaScript.
              JS was by far the hardest thing I've learned in life, watching YouTube tutorials and getting Udemy courses.
              I started to make my own private projects on GitHub and learned Git and React JS.
              I'm glad to announce that I finally feel that I can help companies and myself improve.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default CodingJourney;