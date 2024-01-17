import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex h3 tc">
        <div className="outline w-20 pa0 ma0 bg-blue">
          <h1 className="t light-blue">Hello World</h1>
        </div>
        <div className="outline w-20 pa0 ma0">
          <h1 className=" light-blue">Hello World</h1>
        </div>
        <div className="outline w-20 pa0 ma0">
          <h1 className=" light-blue">Hello World</h1>
        </div>
      </div>
    )
  }
}

export default Header