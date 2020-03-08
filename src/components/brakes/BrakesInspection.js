import React, { Component } from "react";
import BrakesInspectionItem from "./BrakesInspectionItem";

export class BrakesInspection extends Component {
  render() {
    return this.props.brakes.map(item => (
      <BrakesInspectionItem item={item} key={item.id} />
    ));
  }
}

export default BrakesInspection;
