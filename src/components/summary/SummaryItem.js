import React, { Component } from "react";

export default class SummaryItem extends Component {
  render() {
    return (
      <div>
        <p style={pStyle}>
          The Inspection Of {this.props.item.name} : {this.props.item.pass}{" "}
        </p>
      </div>
    );
  }
}

const pStyle = {
  color: "#ffff00"
};
