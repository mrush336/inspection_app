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
import Summary from "./components/summary/Summary";
import SummaryFooter from "./components/summary/SummaryFooter";

class App extends Component {
  state = {
    brakes: [
      { id: 1, name: "Service Brakes", pass: "Incomplete" },
      { id: 2, name: "Parking Brakes", pass: "Incomplete" },
      { id: 3, name: "Brake Drums Or Rotors", pass: "Incomplete" },
      { id: 4, name: "Brake Hoses", pass: "Incomplete" },
      { id: 5, name: "Brake Tubing", pass: "Incomplete" },
      { id: 6, name: "Low Pressure Warning Device", pass: "Incomplete" },
      { id: 7, name: "Tractor Protection Valve", pass: "Incomplete" },
      { id: 8, name: "Air Compressor", pass: "Incomplete" },
      { id: 9, name: "Electric Brakes", pass: "Incomplete" },
      { id: 10, name: "Hydraulic Brakes", pass: "Incomplete" },
      { id: 11, name: "Vacuum Brakes", pass: "Incomplete" },
      { id: 12, name: "Antilock Brakes", pass: "Incomplete" },
      { id: 13, name: "Automatic Brake Adjusters", pass: "Incomplete" }
    ],
    coupling: [
      { id: 14, name: "Fifth Wheels", pass: "Incomplete" },
      { id: 15, name: "Pintle Hooks", pass: "Incomplete" },
      { id: 16, name: "Drawbar Or Towbar Eye", pass: "Incomplete" },
      { id: 17, name: "Drawbar Or Towbar Tongue", pass: "Incomplete" },
      { id: 18, name: "Safety Devices", pass: "Incomplete" },
      { id: 19, name: "Saddle Mounts", pass: "Incomplete" }
    ],
    exhaust: [
      { id: 20, name: "Leaking Forward Or Below Cabin", pass: "Incomplete" },
      { id: 21, name: "A Bus Exhaust System Leaking", pass: "Incomplete" },
      {
        id: 22,
        name: "Burning Or Charing Of Any Combustible Material",
        pass: "Incomplete"
      }
    ],
    fuel: [
      { id: 23, name: "For Visible Leaks", pass: "Incomplete" },
      { id: 24, name: "Filler Cap Is Not Missing", pass: "Incomplete" },
      { id: 25, name: "Tanks Are Securely Attached", pass: "Incomplete" }
    ],
    lighting: [
      {
        id: 26,
        name: "All Lighting Devices And Reflectors",
        pass: "Incomplete"
      }
    ],
    loading: [
      {
        id: 27,
        name: "Load Or Dunnage Will Not Fall Onto Roadway",
        pass: "Incomplete"
      },
      { id: 28, name: "Cargo Shifting Protection", pass: "Incomplete" },
      { id: 29, name: "Container Securement Devices", pass: "Incomplete" }
    ],
    steering: [
      { id: 30, name: "Steering Wheel Freeplay", pass: "Incomplete" },
      { id: 31, name: "Steering Column", pass: "Incomplete" },
      { id: 32, name: "Axle Beam And Components", pass: "Incomplete" },
      { id: 33, name: "Steering Gear Box", pass: "Incomplete" },
      { id: 34, name: "Pitman Arm", pass: "Incomplete" },
      { id: 35, name: "Power Steering System", pass: "Incomplete" },
      { id: 36, name: "Ball Joints", pass: "Incomplete" },
      { id: 37, name: "Tie Rod And Drag Link", pass: "Incomplete" },
      { id: 38, name: "Nuts", pass: "Incomplete" },
      { id: 39, name: "Steering System", pass: "Incomplete" }
    ],
    suspension: [
      { id: 40, name: "U-Bolts And Spring Hangers", pass: "Incomplete" },
      { id: 41, name: "Spring Assembly", pass: "Incomplete" },
      { id: 42, name: "Torque And Radius Rods", pass: "Incomplete" }
    ],
    frame: [
      { id: 43, name: "Frame Members", pass: "Incomplete" },
      { id: 44, name: "Tire and Wheel Clearance", pass: "Incomplete" },
      {
        id: 45,
        name: "Adjustable Axles And Sliding Subframes",
        pass: "Incomplete"
      }
    ],
    tires: [
      { id: 46, name: "Steering Tires", pass: "Incomplete" },
      { id: 47, name: "All Other Tires", pass: "Incomplete" },
      {
        id: 48,
        name: "Speed Restricted Tires Not Installed",
        pass: "Incomplete"
      }
    ],
    wheels: [
      { id: 49, name: "Lock Or Side Ring", pass: "Incomplete" },
      { id: 50, name: "Wheels And Rims", pass: "Incomplete" },
      { id: 51, name: "Fasteners And Lug Nuts", pass: "Incomplete" },
      { id: 52, name: "For Any Welds", pass: "Incomplete" }
    ],
    windshield: [
      { id: 53, name: "For Any Vision Reducing Matter", pass: "Incomplete" }
    ],
    wipers: [{ id: 54, name: "For An Inoperative Wiper", pass: "Incomplete" }],
    seats: [{ id: 55, name: "All Seats Are Secured", pass: "Incomplete" }]
  };
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
            <BrakesInspection brakes={this.state.brakes} />
            <BrakesFooter />
          </Route>

          <Route path="/coupling">
            <Navbar />
            <Header />
            <CouplingHeader />
            <CouplingInspection coupling={this.state.coupling} />
            <CouplingFooter />
          </Route>

          <Route path="/exhaust">
            <Navbar />
            <Header />
            <ExhaustHeader />
            <ExhaustInspection exhaust={this.state.exhaust} />
            <ExhaustFooter />
          </Route>

          <Route path="/fuel">
            <Navbar />
            <Header />
            <FuelHeader />
            <FuelInspection fuel={this.state.fuel} />
            <FuelFooter />
          </Route>

          <Route path="/lighting">
            <Navbar />
            <Header />
            <LightingHeader />
            <LightingInspection lighting={this.state.lighting} />
            <LightingFooter />
          </Route>

          <Route path="/loading">
            <Navbar />
            <Header />
            <LoadingHeader />
            <LoadingInspection loading={this.state.loading} />
            <LoadingFooter />
          </Route>

          <Route path="/steering">
            <Navbar />
            <Header />
            <SteeringHeader />
            <SteeringInspection steering={this.state.steering} />
            <SteeringFooter />
          </Route>

          <Route path="/suspension">
            <Navbar />
            <Header />
            <SuspensionHeader />
            <SuspensionInspection suspension={this.state.suspension} />
            <SuspensionFooter />
          </Route>

          <Route path="/frame">
            <Navbar />
            <Header />
            <FrameHeader />
            <FrameInspection frame={this.state.frame} />
            <FrameFooter />
          </Route>

          <Route path="/tires">
            <Navbar />
            <Header />
            <TiresHeader />
            <TiresInspection tires={this.state.tires} />
            <TiresFooter />
          </Route>

          <Route path="/wheels">
            <Navbar />
            <Header />
            <WheelsHeader />
            <WheelsInspection wheels={this.state.wheels} />
            <WheelsFooter />
          </Route>

          <Route path="/windshield">
            <Navbar />
            <Header />
            <WindshieldHeader />
            <WindshieldInspection windshield={this.state.windshield} />
            <WindshieldFooter />
          </Route>

          <Route path="/wipers">
            <Navbar />
            <Header />
            <WipersHeader />
            <WipersInspection wipers={this.state.wipers} />
            <WipersFooter />
          </Route>

          <Route path="/seats">
            <Navbar />
            <Header />
            <SeatsHeader />
            <SeatsInspection seats={this.state.seats} />
            <SeatsFooter />
          </Route>

          <Route path="/summary">
            <Navbar />
            <Header />
            <Summary items={this.state} />
            <SummaryFooter />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
