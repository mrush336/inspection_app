import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import Navbar from "./components/navbar/Navbar";
import FormTruckComponents from "./components/form/FormTruckComponents";
import Footer from "./Footer";
import BrakesHeader from "./components/brakes/BrakesHeader";
import BrakesInspection from "./components/brakes/BrakesInspection";
import BrakesFooter from "./components/brakes/BrakesFooter";
import CouplingHeader from "./components/coupling/CouplingHeader";
import CouplingInspection from "./components/coupling/CouplingInspection";
import CouplingFooter from "./components/coupling/CouplingFooter";
import ExhaustHeader from "./components/exhaust/ExhaustHeader";
import ExhaustInspection from "./components/exhaust/ExhaustInspection";
import ExhaustFooter from "./components/exhaust/ExhaustFooter";
import FuelHeader from "./components/fuel/FuelHeader";
import FuelInspection from "./components/fuel/FuelInspection";
import FuelFooter from "./components/fuel/FuelFooter";
import LightingHeader from "./components/lighting/LightingHeader";
import LightingInspection from "./components/lighting/LightingInspection";
import LightingFooter from "./components/lighting/LightingFooter";
import LoadingHeader from "./components/loading/LoadingHeader";
import LoadingInspection from "./components/loading/LoadingInspection";
import LoadingFooter from "./components/loading/LoadingFooter";
import SteeringHeader from "./components/steering/SteeringHeader";
import SteeringInspection from "./components/steering/SteeringInspection";
import SteeringFooter from "./components/steering/SteeringFooter";
import SuspensionHeader from "./components/suspension/SuspensionHeader";
import SuspensionInspection from "./components/suspension/SuspensionInspection";
import SuspensionFooter from "./components/suspension/SuspensionFooter";
import FrameHeader from "./components/frame/FrameHeader";
import FrameInspection from "./components/frame/FrameInspection";
import FrameFooter from "./components/frame/FrameFooter";
import TiresHeader from "./components/tires/TiresHeader";
import TiresInspection from "./components/tires/TiresInspection";
import TiresFooter from "./components/tires/TiresFooter";
import WheelsHeader from "./components/wheels/WheelsHeader";
import WheelsInspection from "./components/wheels/WheelsInspection";
import WheelsFooter from "./components/wheels/WheelsFooter";
import WindshieldHeader from "./components/windshield/WindshieldHeader";
import WindshieldInspection from "./components/windshield/WindshieldInspection";
import WindshieldFooter from "./components/windshield/WindshieldFooter";
import WipersHeader from "./components/wipers/WipersHeader";
import WipersInspection from "./components/wipers/WipersInspection";
import WipersFooter from "./components/wipers/WipersFooter";
import SeatsHeader from "./components/seats/SeatsHeader";
import SeatsInspection from "./components/seats/SeatsInspection";
import SeatsFooter from "./components/seats/SeatsFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Navbar />
            <Header />
            <FormTruckComponents />
            <Footer />
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
            <CouplingFooter />
          </Route>

          <Route path="/exhaust">
            <Navbar />
            <Header />
            <ExhaustHeader />
            <ExhaustInspection />
            <ExhaustFooter />
          </Route>

          <Route path="/fuel">
            <Navbar />
            <Header />
            <FuelHeader />
            <FuelInspection />
            <FuelFooter />
          </Route>

          <Route path="/lighting">
            <Navbar />
            <Header />
            <LightingHeader />
            <LightingInspection />
            <LightingFooter />
          </Route>

          <Route path="/loading">
            <Navbar />
            <Header />
            <LoadingHeader />
            <LoadingInspection />
            <LoadingFooter />
          </Route>

          <Route path="/steering">
            <Navbar />
            <Header />
            <SteeringHeader />
            <SteeringInspection />
            <SteeringFooter />
          </Route>

          <Route path="/suspension">
            <Navbar />
            <Header />
            <SuspensionHeader />
            <SuspensionInspection />
            <SuspensionFooter />
          </Route>

          <Route path="/frame">
            <Navbar />
            <Header />
            <FrameHeader />
            <FrameInspection />
            <FrameFooter />
          </Route>

          <Route path="/tires">
            <Navbar />
            <Header />
            <TiresHeader />
            <TiresInspection />
            <TiresFooter />
          </Route>

          <Route path="/wheels">
            <Navbar />
            <Header />
            <WheelsHeader />
            <WheelsInspection />
            <WheelsFooter />
          </Route>

          <Route path="/windshield">
            <Navbar />
            <Header />
            <WindshieldHeader />
            <WindshieldInspection />
            <WindshieldFooter />
          </Route>

          <Route path="/wipers">
            <Navbar />
            <Header />
            <WipersHeader />
            <WipersInspection />
            <WipersFooter />
          </Route>

          <Route path="/seats">
            <Navbar />
            <Header />
            <SeatsHeader />
            <SeatsInspection />
            <SeatsFooter />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
