import axios from "axios";
import React, { Component } from "react";

class AxiosApi extends Component {
  state = {
    users: [],
  };

  //servis almak için cdm ==> TAB
  //async avait:cevap dönene kadar bekler
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:4040/user44");
    console.log(response);
    this.setState({
      users: response.data,
    });
  };

  render() {
    return <div>Sonuc</div>;
  }
}

export default AxiosApi;
