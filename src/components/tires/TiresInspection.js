import React, { Component } from "react";
import TiresInspectionItem from "./TiresInspectionItem";

export class TiresInspection extends Component {
  state = {
    tires: [
      { id: 46, name: "Steering Tires", pass: false },
      { id: 47, name: "Other Tires", pass: false },
      { id: 48, name: "Speed Restricted Tires", pass: false }
    ]
  };
  render() {
    return this.state.tires.map(item => (
      <TiresInspectionItem item={item} key={item.id} />
    ));
  }
}

export default TiresInspection;
