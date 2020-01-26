import React, { Component } from "react";
import WipersInspectionItem from "./WipersInspectionItem";

export class WipersInspection extends Component {
  state = {
    wipers: [{ id: 54, name: "Inoperative Wiper", pass: false }]
  };
  render() {
    return this.state.wipers.map(item => (
      <WipersInspectionItem item={item} key={item.id} />
    ));
  }
}

export default WipersInspection;
