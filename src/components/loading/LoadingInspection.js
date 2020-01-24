import React, { Component } from "react";
import LoadingInspectionItem from "./LoadingInspectionItem";

export class LoadingInspection extends Component {
  state = {
    loading: [
      { id: 27, name: "Load/Dunnage Falling", pass: false },
      { id: 28, name: "Cargo Shifting", pass: false },
      { id: 29, name: "Container Securement", pass: false }
    ]
  };
  render() {
    return this.state.loading.map(item => (
      <LoadingInspectionItem item={item} key={item.id} />
    ));
  }
}

export default LoadingInspection;
