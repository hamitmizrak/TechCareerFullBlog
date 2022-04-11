import React, { Component } from "react";

class StateTutorials extends Component {
  //propTypes default
  static propTypes = {
    dersAdi: "adını giriniz",
    dersKodu: "kodu girmediniz",
  };

  //2.YOL STATE
  state = {
    isvisible: false,
    data: " state Veriler burada saklı",
  };

  // 1.YOL STATE constructor
  // constructor(props) {
  //   super(props);
   // 1.YOL state constructor
   //  this.state = {
   //    isvisible: false,
   //    data: " state Veriler burada saklı",
   //  };
  // }

  render() {
    //destructing
    const { dersAdi, dersKodu } = this.props;
    const { isvisible } = this.state;

    return (
      <div>{isvisible ? <p>{this.state.data} 555555</p> : "gizli içerik"}</div>
    );
  }
}

export default StateTutorials;
