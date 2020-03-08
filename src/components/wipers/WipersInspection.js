import React, { Component } from "react";
import WipersInspectionItem from "./WipersInspectionItem";

export class WipersInspection extends Component {
  render() {
    return this.props.wipers.map(item => (
      <WipersInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WipersInspection;
