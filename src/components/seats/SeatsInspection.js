import React, { Component } from "react";
import SeatsInspectionItem from "./SeatsInspectionItem";

export class SeatsInspection extends Component {
  render() {
    return this.props.seats.map(item => (
      <SeatsInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SeatsInspection;
