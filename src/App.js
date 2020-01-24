import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import LoginControl from "./components/login/LoginControl";
import BrakesInspection from "./components/brakes/BrakesInspection";
import CouplingInspection from "./components/coupling/CouplingInspection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginControl />
        <BrakesInspection />
        <CouplingInspection />
      </div>
    );
  }
}
export default App;
