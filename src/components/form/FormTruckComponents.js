import React, { Component } from "react";
import FormHeader from "./FormHeader";
export class FormTruckComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      motor_carrier_operator: "",
      address: "",
      city_state_zip: "",
      date: "",
      inspectors_name: "",
      vin: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <FormHeader state={this.state} />
        <form>
          <div>
            <label>Motor Carrier Operator:</label>{" "}
            <input
              type="text"
              value={this.state.motor_carrier_operator}
              name="motor_carrier_operator"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Todays Date:</label>
            <input
              type="text"
              value={this.state.date}
              name="date"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Address:</label>{" "}
            <input
              type="text"
              value={this.state.address}
              name="address"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Inspectors Name:</label>
            <input
              type="text"
              value={this.state.inspectors_name}
              name="inspectors_name"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>City, State and Zip:</label>
            <input
              type="text"
              value={this.state.city_state_zip}
              name="city_state_zip"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Vehicle Identification Number:</label>
            <input
              type="text"
              value={this.state.vin}
              name="vin"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FormTruckComponents;
