import React, { Component } from "react";

class ContextBindTutorials4 extends Component {
  constructor(props) {
    super(props);
    this.onClickData = this.onClickData.bind(this);
  }

  //number,string
  onClickData = (string, event) => {
    console.log(string);
  };

  render() {
    return (
      <div>
        <h1 onClick={this.onClickData.bind(this, "44")}>Context bind-4</h1>
      </div>
    );
  }
}

export default ContextBindTutorials4;
