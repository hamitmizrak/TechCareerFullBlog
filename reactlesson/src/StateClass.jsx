import React, { Component } from 'react'

export default class State extends Component {
constructor(props){
    super(props);
    //bind işlemi yapılmalı yoksa console.log(this) state bilgisine ulaşamamaz undefined olur
    this.fullInformation=this.fullInformation.bind(this);
    this.state = {
        adi:"default adi", 
        soyadi:"default soyadi", 
        dil:"default dil"
    }
    
}

//compoenntDidMount: render sonrasında çalışmasını isteyeceğimiz  örneğin;servis çalışması için
//1.constructor 2.render 3.componentDidMount
componentDidMount(){
  console.log("1.constructur 2.render 3.componentDidMount ")
}

//componentDidUpdate : state veya props bir değişiklik olduğunda çalışır
componentDidUpdate(prevProps,prevState){
  console.log("güncelleme geldi ")
}

//component silinirse 
componentWillUnmount(){
  console.log("Bilgi Component silinmiştir")
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

objectToString(){
  let obj={
      adi:"Hamit",
      soyadi:"Mızrak"
  }

  //objeyi string'e
  const objectToString=JSON.stringify(obj);
  console.log(objectToString)

  //string'i object
  const stringToObject=JSON.parse(objectToString);
  console.log(stringToObject)
}


  render() {
    return (
      <div>
          <p>{this.state.adi} - {this.state.soyadi} - {this.state.dil}</p>
         <button onClick={this.fullInformation}>information</button>
         <button onClick={this.objectToString}>json</button>
      </div>
    )
  }
}
