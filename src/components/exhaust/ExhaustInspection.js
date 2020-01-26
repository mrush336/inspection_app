import React, { Component } from "react";
import ExhaustInspectionItem from "./ExhaustInspectionItem";

export class ExhaustInspection extends Component {
  state = {
    exhaust: [
      { id: 20, name: "Leaking Forward or Below Cabin", pass: false },
      { id: 21, name: "Bus Exhaust System Leaking", pass: false },
      { id: 22, name: "Exhaust Burning or Charing", pass: false }
    ]
  };
  render() {
    return this.state.exhaust.map(item => (
      <ExhaustInspectionItem item={item} key={item.id} />
    ));
  }
}

export default ExhaustInspection;
