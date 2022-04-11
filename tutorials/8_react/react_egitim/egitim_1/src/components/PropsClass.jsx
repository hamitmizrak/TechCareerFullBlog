import React, { Component } from "react";
import PropTypes from "prop-types";
class PropsClass extends Component {
  render() {
    //Destructing
    const { props_key, adi, soyadi } = this.props;
    return (
      <div>
        <br />
        <h4>{props_key}</h4>
        <ul>
          <li> {adi} </li>
          <li>{soyadi} </li>{" "}
        </ul>
      </div>
    );
  }
}

//propslar hakkında mutlaka olmasıu gerekenler
PropsClass.propTypes = {
  props_key: PropTypes.string.isRequired,
  adi: PropTypes.string.isRequired,
  soyadi: PropTypes.string.isRequired,
};

//propslarda default olacak işlemler
PropsClass.defaultProps = {
  adi: "defauult adi",
  soyadi: "default soyadi",
};

export default PropsClass;
