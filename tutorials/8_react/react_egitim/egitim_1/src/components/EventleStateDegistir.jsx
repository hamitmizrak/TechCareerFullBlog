import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class EventleStateDegistir extends Component {
  state = {
    isVisible: false, //başlangıç değer
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible, //butona tıkladığımda true ise false
    });
  };

  render() {
    //destructing
    const { isVisible } = this.state; // şu andaki durum almak
    return (
      <div>
        <h1 onClick={this.onClickEvent}>Event Değiştir </h1>
        <div>{isVisible ? <p> 555555 </p> : "gizli içerik"}</div>
      </div>
    );
  }
}

export default EventleStateDegistir;
