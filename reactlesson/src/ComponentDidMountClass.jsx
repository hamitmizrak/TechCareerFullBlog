import React, { Component } from 'react'

export default class ComponentDidMountClass extends Component {
constructor(props){
    super(props);
}

componentDidMount(){
    console.log("1.constructur 2.render 3.componentDidMount ")
}

  render() {
    return (
      <div>ComponentDidMountClass</div>
    )
  }
}
