import React, { Component } from "react";
import BrakesInspectionItem from "./BrakesInspectionItem";

export class BrakesInspection extends Component {
  state = {
    brakes: [
      { id: 1, name: "Service Brakes", pass: false },
      { id: 2, name: "Parking Brakes", pass: false },
      { id: 3, name: "Brake Drums or Rotors", pass: false },
      { id: 4, name: "Brake Hose", pass: false },
      { id: 5, name: "Brake Tubing", pass: false },
      { id: 6, name: "Low Pressure Warning Device", pass: false },
      { id: 7, name: "Tractor Protection Valve", pass: false },
      { id: 8, name: "Air Compressor", pass: false },
      { id: 9, name: "Electric Brakes", pass: false },
      { id: 10, name: "Hydraulic Brakes", pass: false },
      { id: 11, name: "Vacuum Brakes", pass: false },
      { id: 12, name: "Antilock Brakes", pass: false },
      { id: 13, name: "Automatic Brake Adjusters", pass: false }
    ]
  };
  render() {
    return this.state.brakes.map(item => (
      <BrakesInspectionItem item={item} key={item.id} />
    ));
  }
}

export default BrakesInspection;
