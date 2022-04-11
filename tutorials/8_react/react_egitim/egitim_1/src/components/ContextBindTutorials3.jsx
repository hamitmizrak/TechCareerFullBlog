import React, { Component } from "react";

class ContextBindTutorials3 extends Component {

  //3.YOL arrow function
  onClickData =(event) => {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClickData}>Context bind-3</h1>
      </div>
    );
  }
}

export default ContextBindTutorials3;
