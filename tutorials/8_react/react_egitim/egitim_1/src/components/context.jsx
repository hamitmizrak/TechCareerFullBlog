import React, { Component } from "react";

const UserContext = React.createContext();
//Provider(üretici) Consumer(Tüketici)

export class UserProvider extends Component {
  state = {
    user44: [
      {
        id: 1,
        adi: "Hamit-Context 11",
        soyadi: "Mızrak11",
      },
      {
        id: 2,
        adi: "Hamit-Context  22",
        soyadi: "Mızrak22",
      },
    ],
  };
  render() {
    //Provider
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

//consumer
const UserConsumer = UserContext.Consumer;
export default UserConsumer; //dikkat: export consumer yapıyoruz.
 