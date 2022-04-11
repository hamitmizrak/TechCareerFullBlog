import React, { Component } from 'react';

class ContextBindTutorials extends Component {

  onClickData(){
    console.log(this);
  }


  render() {
    return (
      <div>
        <h1 onClick={this.onClickData.bind(this)} >Context bind</h1>
      </div>
    );
  }
}

export default ContextBindTutorials;