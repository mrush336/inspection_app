import React, { Component } from "react";
import ExhaustInspectionItem from "./ExhaustInspectionItem";

export class ExhaustInspection extends Component {
  render() {
    return this.props.exhaust.map(item => (
      <ExhaustInspectionItem item={item} key={item.id} />
    ));
  }
}

export default ExhaustInspection;
