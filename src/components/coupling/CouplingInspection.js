import React, { Component } from "react";
import CouplingInspectionItem from "./CouplingInspectionItem";

export class CouplingInspection extends Component {
  render() {
    return this.props.coupling.map(item => (
      <CouplingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default CouplingInspection;
