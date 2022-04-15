import React, { Component } from 'react'
//class: this , {}
export default class Person extends Component {
  //1-) constructor
  //2-) render
  //3-) componentDidMount

  //constructor: projemiz çalıştığın ilk çalışacak kısımdır
  constructor(props) {
      //üst atadaki verileri almak ve işlemek için kullanıyoruz
    super(props)
    console.log("1.adım constructor çalıştı")
    //bind: obje verilerini almak ve bağlamak kullanırız
    this.eventMethod = this.eventMethod.bind(this)
    //state: durum belirdir
    this.state = {
      name: 'Hamit44',
    }
  }

// 1-)  cdm ==> TAB
componentDidMount() {
    console.log("3.adım componentDidMount")
}


//2-) cdu
 componentDidUpdate(prevProps, prevState) {
    console.log("4.adım state değişti componentDidUpdate")
 }

//3-) cwu   
//componentWillUnmount


  //method
  eventMethod() {
      console.log(this);
      console.log(this.state);
      console.log(this.state.name);
    this.setState({ name:"isim değişti"})
  }

  //render
  render() {
      console.log("2.adım render")
    return (
      <div>
        <p>{this.state.name}</p>
        <button
          onClick={this.eventMethod}
          className="btn btn-primary"
          style={{ fontSize: '2rem' }}
        >
          Gönder
        </button>
      </div>
    )
  }
}
