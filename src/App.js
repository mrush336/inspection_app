import React, { Component } from "react";
import Header from "./Header";
import BrakesInspection from "./components/brakes/BrakesInspection";
import LoginControl from "./components/login/LoginControl";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginControl />
        <BrakesInspection />
      </div>
    );
  }
}
export default App;
