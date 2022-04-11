import React, { Component } from "react";
import UserComponent from "./UserComponent";

class Users extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <div>
        {users.map((user) => {
          return <UserComponent
              key={user.id}
              adi={user.adi}
              soyadi={user.soyadi}
          />;
        })}
      </div>
    );
  }
}

export default Users;



// render() {
//   return (
//     <UserConsumer>
//       {(value) => {
//         const { users } = value;
//         return (
//           <div>
//             {users.map((user) => {
//               return (
//                 <UserComponent
//                   key={user.id}
//                   adi={user.adi}
//                   soyadi={user.soyadi}
//                 />
//               );
//             })}

//           </div>
//         );
//       }}
//     </UserConsumer>
//   );
// }
// }