import React, { Component } from 'react'

export default class State extends Component {
constructor(props){
    super(props);
    //bind işlemi yapılmalı yoksa console.log(this) state bilgisine ulaşamamaz undefined olur
    this.fullInformation=this.fullInformation.bind(this);
    this.state = {
        adi:"Hamit", 
        soyadi:"Mızrak", 
        dil:"Java Script"
    }
}

fullInformation(){
  console.log(this)//this: state bilgisi almak için
  console.log(this.state)
  console.log(this.state.adi)
  //bunun yerine setState kullanmalısın
  //this.state.adi='Hamit44';
  //console.log(this.state.adi)
  this.setState({ adi:"Hamit55"})
  console.log(this.state.adi)
}

  render() {
    return (
      <div>
          <p>{this.state.adi} - {this.state.soyadi} - {this.state.dil}</p>
         <button onClick={this.fullInformation}>information</button>
      </div>
    )
  }
}
