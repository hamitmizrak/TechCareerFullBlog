import React, { Component } from "react";

class UserComponent extends Component {
  render() {
    //Destructing
    const { adi, soyadi } = this.props;
    return (
      <div>
        <ul>
          <li> {adi} </li>
          <li>{soyadi} </li>
        </ul>
      </div>
    );
  }
}
export default UserComponent;
