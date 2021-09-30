import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked here {this.state.counter} times
        </button>
      </div>
    );
  }
}
