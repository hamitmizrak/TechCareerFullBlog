import React, { Component } from "react";
import AxiosApi from "./api/AxiosApi";
import ComponentlerArasiIletisim from "./components/ComponentlerArasiIletisim";
import ContextBindTutorials1 from "./components/ContextBindTutorials1";
import ContextBindTutorials2 from "./components/ContextBindTutorials2";
import ContextBindTutorials3 from "./components/ContextBindTutorials3";
import ContextBindTutorials4 from "./components/ContextBindTutorials4";
import EventleStateDegistir from "./components/EventleStateDegistir";
import EventTutorials from "./components/EventTutorials";
import MountingTutorials from "./components/MountingTutorials";

import ReactTuto from "./components/ReactTuto";
import StateTutorials from "./components/StateTutorials";
import UserComponent from "./components/UserComponent";

class App extends Component {
  render() {
    return (
      <div>

<AxiosApi/>


        <MountingTutorials />
    
        <br />
        <UserComponent />
        <br />

        <ComponentlerArasiIletisim />
        <br />
        <EventleStateDegistir />
        <br />
        <ContextBindTutorials4 />
        <br />
        <ContextBindTutorials3 />
        <br />
        <ContextBindTutorials2 />
        <br />
        <ContextBindTutorials1 />
        <br />
        <EventTutorials />
        <br />
        <StateTutorials />
        <br />
        <ReactTuto />
      </div>
    );
  }
}

export default App;
