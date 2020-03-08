import React, { Component } from "react";
import FuelInspectionItem from "./FuelInspectionItem";

export class FuelInspection extends Component {
  render() {
    return this.props.fuel.map(item => (
      <FuelInspectionItem item={item} key={item.id} />
    ));
  }
}

export default FuelInspection;
