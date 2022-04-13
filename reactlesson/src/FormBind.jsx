import React, { Component } from 'react'

export default class FormBind extends Component {
  // constructor(props){
  //     super(props);
  // }

  onSubmitMethod(e) {
    //alert('Merhabalar')
    e.preventDefault();
   
    let name2=e.target.elements.input_name.value;
    console.log(name2+" = "+name2.length)

    let name3=e.target.elements.input_name.value.trim();
      console.log(name3+" = "+name3.length)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitMethod}>
          <span>Adınız Giriniz</span>
          <input className="form-control44" type="text" name="input_name" />
          <button type="submit" className="btn btn-primary mt-1" >
            Gönder
          </button>
        </form>
      </div>
    )
  }
}
