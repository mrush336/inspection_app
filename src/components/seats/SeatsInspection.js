import React, { Component } from "react";
import SeatsInspectionItem from "./SeatsInspectionItem";

export class SeatsInspection extends Component {
  state = {
    seats: [{ id: 55, name: "All Seats Are Secured", pass: false }]
  };
  render() {
    return this.state.seats.map(item => (
      <SeatsInspectionItem item={item} key={item.id} />
    ));
  }
}

export default SeatsInspection;
