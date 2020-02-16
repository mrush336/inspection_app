import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import * as firebase from "firebase/app";
//import "firebase/analytics";
//import "firebase/firestore";

import "./App.css";

import Header from "./Header";
import Navbar from "./components/navbar/Navbar";
//import FormHeader from "./components/form/FormHeader";
import FormTruckComponents from "./components/form/FormTruckComponents";
//import LoginControl from "./components/login/LoginControl";
import BrakesHeader from "./components/brakes/BrakesHeader";
import BrakesInspection from "./components/brakes/BrakesInspection";
import BrakesFooter from "./components/brakes/BrakesFooter";
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
//import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Navbar />
            <Header />
            <FormTruckComponents />
          </Route>

          <Route path="/brakes">
            <Navbar />
            <Header />
            <BrakesHeader />
            <BrakesInspection />
            <BrakesFooter />
          </Route>

          <Route path="/coupling">
            <Navbar />
            <Header />
            <CouplingHeader />
            <CouplingInspection />
          </Route>

          <Route path="/exhaust">
            <Navbar />
            <Header />
            <ExhaustHeader />
            <ExhaustInspection />
          </Route>

          <Route path="/fuel">
            <Navbar />
            <Header />
            <FuelHeader />
            <FuelInspection />
          </Route>

          <Route path="/lighting">
            <Navbar />
            <Header />
            <LightingHeader />
            <LightingInspection />
          </Route>

          <Route path="/loading">
            <Navbar />
            <Header />
            <LoadingHeader />
            <LoadingInspection />
          </Route>

          <Route path="/steering">
            <Navbar />
            <Header />
            <SteeringHeader />
            <SteeringInspection />
          </Route>

          <Route path="/suspension">
            <Navbar />
            <Header />
            <SuspensionHeader />
            <SuspensionInspection />
          </Route>

          <Route path="/frame">
            <Navbar />
            <Header />
            <FrameHeader />
            <FrameInspection />
          </Route>

          <Route path="/tires">
            <Navbar />
            <Header />
            <TiresHeader />
            <TiresInspection />
          </Route>

          <Route path="/wheels">
            <Navbar />
            <Header />
            <WheelsHeader />
            <WheelsInspection />
          </Route>

          <Route path="/windshield">
            <Navbar />
            <Header />
            <WindshieldHeader />
            <WindshieldInspection />
          </Route>

          <Route path="/wipers">
            <Navbar />
            <Header />
            <WipersHeader />
            <WipersInspection />
          </Route>

          <Route path="/seats">
            <Navbar />
            <Header />
            <SeatsHeader />
            <SeatsInspection />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
