import React, { Component } from "react";
import firebase from "../firebase.js";
import uuidv4 from "uuid";
export class FormHeader extends Component {
  handleClickSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.state);

    firebase
      .database()
      .ref("inspections/" + uuidv4())
      .set({
        motor_carrier_operator: this.props.state.motor_carrier_operator,
        address: this.props.state.address,
        city_state_zip: this.props.state.city_state_zip,
        date: this.props.state.date,
        inspectors_name: this.props.state.inspectors_name,
        vin: this.props.state.vin,
      })
      .then(window.alert("Data sent to the server!"));
  };
  render() {
    return (
      <header style={headerStyle}>
        <h2>Enter the required information below and click submit</h2>
        <button onClick={this.handleClickSubmit}>SUBMIT</button>
      </header>
    );
  }
}

const headerStyle = {
  background: "#99ccff",
  color: "#ff0000",
  margin: "1rem 0",
};

export default FormHeader;
