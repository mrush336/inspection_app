import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import LoginControl from "./components/login/LoginControl";
import BrakesHeader from "./components/brakes/BrakesHeader";
import BrakesInspection from "./components/brakes/BrakesInspection";
import CouplingHeader from "./components/coupling/CouplingHeader";
import CouplingInspection from "./components/coupling/CouplingInspection";
import ExhaustHeader from "./components/exhaust/ExhaustHeader";
import ExhaustInspection from "./components/exhaust/ExhaustInspection";
import FuelHeader from "./components/fuel/FuelHeader";
import FuelInspection from "./components/fuel/FuelInspection";
import LightingHeader from "./components/lighting/LightingHeader";
import LightingInspection from "./components/lighting/LightingInspection";
import LoadingHeader from "./components/loading/LoadingHeader";
import LoadingInspection from "./components/loading/LoadingInspection";
import SteeringHeader from "./components/steering/SteeringHeader";
import SteeringInspection from "./components/steering/SteeringInspection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginControl />
        <BrakesHeader />
        <BrakesInspection />
        <CouplingHeader />
        <CouplingInspection />
        <ExhaustHeader />
        <ExhaustInspection />
        <FuelHeader />
        <FuelInspection />
        <LightingHeader />
        <LightingInspection />
        <LoadingHeader />
        <LoadingInspection />
        <SteeringHeader />
        <SteeringInspection />
      </div>
    );
  }
}
export default App;
