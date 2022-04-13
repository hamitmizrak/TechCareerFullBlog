import React, { Component } from 'react'

//this  {}
export default class StateClass2 extends Component {
  //constructor
  constructor(props) {
    super(props)

    //bind
    this.informationMethod = this.informationMethod.bind(this);

    //state
    this.state={
        adi:"default adınızı giriniz",
        soyadi:"default soyadınızı giriniz",
    }
  }

  //method
  informationMethod() {
    console.log('Eklendi')
    console.log(this)
    console.log(this.state.adi)
    console.log(this.state.soyadi)
    console.log("******************")

    //state
    // this.state.adi="Hamit";
    // console.log(this.state.adi)
    // this.state.soyadi="Mızrak";
    // console.log(this.state.soyadi)

    //setState
    this.setState({
        adi:"Hamit",
        soyadi:"Mızrak",
    })
    console.log(this.state.adi)
    console.log(this.state.soyadi)
  }

  //render
  render() {
    return (
      <div>
          <p>{this.state.adi} - {this.state.soyadi}</p>
        <button className="btn btn-warning" onClick={this.informationMethod}>
          Gönder
        </button>
      </div>
    )
  }
}
