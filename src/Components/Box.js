import React from "react";

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      clickCounter: 0,
      //set a state for color & clickCounter
    };
  }
  /* increment function */
  increment = () => {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  };

  colorChange = () => {
    this.setState({ color: "orange" });
  };

  render() {
    const styleColor = {
      background: this.state.color,
    };

    return (
      <div className="parent">
        <div
          className="child"
          id="box1"
          style={styleColor}
          onClick={this.colorChange}
        >
          {this.state.clickCounter}
          <button onClick={this.increment}>select</button>
        </div>

        <div
          className="child"
          id="box2"
          style={styleColor}
          onClick={this.colorChange}
        >
          {this.state.clickCounter}
          <button onClick={this.increment}>select</button>
        </div>
      </div>
    );
  }
}
