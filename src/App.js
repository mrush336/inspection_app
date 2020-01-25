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
import SuspensionHeader from "./components/suspension/SuspensionHeader";
import SuspensionInspection from "./components/suspension/SuspensionInspection";
import FrameHeader from "./components/frame/FrameHeader";
import FrameInspection from "./components/frame/FrameInspection";
import TiresHeader from "./components/tires/TiresHeader";
import TiresInspection from "./components/tires/TiresInspection";
import WheelsHeader from "./components/wheels/WheelsHeader";
import WheelsInspection from "./components/wheels/WheelsInspection";
import WindshieldHeader from "./components/windshield/WindshieldHeader";
import WindshieldInspection from "./components/windshield/WindshieldInspection";
import WipersHeader from "./components/wipers/WipersHeader";
import WipersInspection from "./components/wipers/WipersInspection";
import SeatsHeader from "./components/seats/SeatsHeader";
import SeatsInspection from "./components/seats/SeatsInspection";

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
        <SuspensionHeader />
        <SuspensionInspection />
        <FrameHeader />
        <FrameInspection />
        <TiresHeader />
        <TiresInspection />
        <WheelsHeader />
        <WheelsInspection />
        <WindshieldHeader />
        <WindshieldInspection />
        <WipersHeader />
        <WipersInspection />
        <SeatsHeader />
        <SeatsInspection />
      </div>
    );
  }
}
export default App;
