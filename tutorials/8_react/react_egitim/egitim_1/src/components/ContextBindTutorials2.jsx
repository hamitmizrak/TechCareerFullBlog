import React, { Component } from "react";

class ContextBindTutorials2 extends Component {
  constructor(props) {
    super(props);
    //2.YOL
    this.onClickData = this.onClickData.bind(this);
  }

  onClickData() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClickData}>Context bind-2</h1>
      </div>
    );
  }
}

export default ContextBindTutorials2;
