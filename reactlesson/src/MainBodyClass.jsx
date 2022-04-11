import React, { Component } from 'react'
//UNUTMAAAA: classta this olarak alıyoruz
//props: bir componentten başka bir componente veri taşımak
export default class MainBodyClass extends Component {
  render() {
    console.log(this.props)
    const {main,computerName,computerTrade,computerPrice}=this.props;
    return (
      <div>
        <h1 className="text-warning">Main</h1>
        <p>{this.props.main}</p>
        <ul>
          <li>{main}</li>
          <li>{computerName}</li>
          <li>{computerTrade}</li>
          <li>{computerPrice}</li>
        </ul>
      </div>
    )
  }
}
