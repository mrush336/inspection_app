import React, { Component } from "react";
import FuelInspectionItem from "./FuelInspectionItem";

export class FuelInspection extends Component {
  state = {
    fuel: [
      { id: 23, name: "For Visible Leaks", pass: false },
      { id: 24, name: "Filler Cap Is Not Missing", pass: false },
      { id: 25, name: "Tanks Are Securely Attached", pass: false }
    ]
  };
  render() {
    return this.state.fuel.map(item => (
      <FuelInspectionItem item={item} key={item.id} />
    ));
  }
}

export default FuelInspection;
