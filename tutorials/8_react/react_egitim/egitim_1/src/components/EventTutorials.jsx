import React, { Component } from "react";

export default class EventTutorials extends Component {
  onClickEvent(event) {
    console.log("event nereden geldi ?" + event.target);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClickEvent}>Event Çalışsın</h1>
      </div>
    );
  }
}
