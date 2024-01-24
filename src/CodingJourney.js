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
            In high school, my interest in technology deepened through gaming, making me seek further knowledge. I enrolled in an Information Technology course online at WGU Academy with the aspiration of expanding my skills.
            <br></br><br></br>
            Unfortunately, I failed the test required to complete the course, Without hope, I immersed myself in coding and game development videos, believing that such feats were beyond my reach.
            <br></br><br></br>
            I turned to YouTube to learn Python, initially considered one of the more accessible programming languages, I found very challenging. Determined to overcome this hurdle, I shifted my focus to JavaScript. The journey was hard with the complexities of HTML and CSS. However, with persistent effort over weeks, I gradually gained proficiency and felt prepared to tackle JavaScript.
            <br></br><br></br>
            JavaScript proved to be the most hardship in my learning journey. Through YouTube tutorials and Udemy courses, I delved into the intricacies of the language. Establishing my presence on GitHub, I undertook private projects, honed my skills in Git, and ventured into React JS.
            <br></br><br></br>
            Today, I am pleased to announce that I have reached a point where I am confident in my ability to contribute to companies and enhance my personal growth.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default CodingJourney;