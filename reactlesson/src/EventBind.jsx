import React, { Component } from 'react'

//Classlarda
//1-constructor
//2-render

// C-CE-C>S
export default class EventBind extends Component {
  constructor(props) {
    super(props)
    this.eventBindMethod=this.eventBindMethod.bind(this);//bind
  }

  //event Bind Method
  eventBindMethod() {
    console.log('Tıklandı')
    console.log(this)
    console.log("*************************")
    console.log(this.props)
    console.log(this.props.language)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button
          className="btn btn-success shadow mt-5"
          onClick={this.eventBindMethod}
        >
          Click Me
        </button>
      </div>
    )
  }
}
