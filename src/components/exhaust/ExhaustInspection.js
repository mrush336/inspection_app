import React, { Component } from "react";
import ExhaustInspectionItem from "./ExhaustInspectionItem";

export class ExhaustInspection extends Component {
  state = {
    exhaust: [
      { id: 20, name: "Leaking Forward Or Below Cabin", pass: false },
      { id: 21, name: "A Bus Exhaust System Leaking", pass: false },
      {
        id: 22,
        name: "Burning Or Charing Of Any Combustible Material",
        pass: false
      }
    ]
  };
  render() {
    return this.state.exhaust.map(item => (
      <ExhaustInspectionItem item={item} key={item.id} />
    ));
  }
}

export default ExhaustInspection;
