import React, { Component } from "react";

class MountingTutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merhabalar: "Nasılsın",
    };
    console.log("1-constructor çalıştı");
  }

  //cdm TAB
  componentDidMount() {
    console.log("3-componentDidMount Çalıştı");
    //api işelmelerinde kullanıyoruz.
    this.setState({
      merhabalar: "güncel 2",
    });
  }

  //cdu ==> TAB
  componentDidUpdate(prevProps, prevState) {
    console.log("6-componentDidUpdate çalıştı");
  }

  //render tekrar çalışmanızı engellemek ve performans sağlamak istiyorsak
  //ancak rect pek yapılmasını önermiyor.
  //should ==> TAB
  shouldComponentUpdate() {
    console.log("4-shouldComponentUpdate çalıştı");
    return false;
  }

  //cwu ==> TAB
  //kaynakları serbest bırakmak örneğin bir üyeyi silmeden önce bütün bağımlılıkları kaldırmak için kullanabilirz
  componentWillUnmount() {
    console.log(
      "??? componentWillUnmount component silinemden hemen öncesinde çalışacak"
    );
  }

  render() {
    // this.setState({ }) KESİNLİKLE YAPMA
    console.log("2 veya 5 render çalıştı");
    return <div></div>;
  }
}

export default MountingTutorials;
