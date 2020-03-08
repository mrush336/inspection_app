<LinkButton to="/coupling" style={buttonStyleContinue}>
        CONTINUE
      </LinkButton>{" "}
      <LinkButton to="/" style={buttonStyleBack}>
        GO-BACK
      </LinkButton>

const buttonStyleContinue = {
  backgroundColor: "#00ff00",
  borderRadius: "20px",
  fontSize: "1.25rem"
};

const buttonStyleBack = {
  backgroundColor: "#ff0000",
  borderRadius: "20px",
  fontSize: "20px"
};


render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

// function for incrementing id numbers
const addId = function(id){
  return id = 1 + inspections.length;
}

state = {
  brakes: [
    {id: 1, name: 'Service Brakes', pass: false},
    {id: 2, name: 'Parking Brakes', pass: false},
    {id: 3, name: 'Brake Drums or Rotors', pass: false},
    {id: 4, name: 'Brake Hose', pass: false},
    {id: 5, name: 'Brake Tubing', pass: false},
    {id: 6, name: 'Low Pressure Warning Device', pass: false},
    {id: 7, name: 'Tractor Protection Valve', pass: false},
    {id: 8, name: 'Air Compressor', pass: false},
    {id: 9, name: 'Electric Brakes', pass: false},
    {id: 10, name: 'Hydraulic Brakes', pass: false},
    {id: 11, name: 'Vacuum Brakes', pass: false},
    {id: 12, name: 'Anitlock Brakes', pass: false},
    {id: 13, name: 'Automatic Brake Adjusters', pass: false}
  ],
  coupling_devices: [
    {id: 14, name: 'Fifth Wheels', pass: false},
    {id: 15, name: 'Pintle Hooks', pass: false},
    {id: 16, name: 'Drawbar/Towbar Eye', pass: false},
    {id: 17, name: 'Drawbar/Towbar Tongue', pass: false},
    {id: 18, name: 'Safety Devices', pass: false},
    {id: 19, name: 'Saddle Mounts', pass: false},
  ],
  exhaust: [
    {id: 20, name: 'Leaking Forward/Below Cabin', pass: false},
    {id: 21, name: 'Bus Exhaust Leaking', pass: false},
    {id: 22, name: 'Exhaust Burning/Charing', pass: false},
  ],
  fuel: [
    {id: 23, name: 'Visible Leak', pass: false},
    {id: 24, name: 'Filler Cap', pass: false},
    {id: 25, name: 'Tank Securely Attached', pass: false},
  ],
  lighting: [
    {id: 26, name: 'All Lighting Devices', pass: false},
  ],
  loading: [
    {id: 27, name: 'Load/Dunnage Falling', pass: false},
    {id: 28, name: 'Cargo Shifting', pass: false},
    {id: 29, name: 'Container Securement', pass: false},
  ],
  steering: [
    {id: 30, name: 'Steering Wheel Freeplay', pass: false},
    {id: 31, name: 'Steering Column', pass: false},
    {id: 32, name: 'Axle Beam/Components', pass: false},
    {id: 33, name: 'Steering Gear Box', pass: false},
    {id: 34, name: 'Pitman Arm', pass: false},
    {id: 35, name: 'Power Steering', pass: false},
    {id: 36, name: 'Ball Joints', pass: false},
    {id: 37, name: 'Tie Rod/Drag Link', pass: false},
    {id: 38, name: 'Nuts', pass: false},
    {id: 39, name: 'Steering System', pass: false},
  ],
  suspension: [
    {id: 40, name: 'U-Bolts/Spring Hangers', pass: false},
    {id: 41, name: 'Spring Assembly', pass: false},
    {id: 42, name: 'Torque/Radius Rods', pass: false},
  ],
  frame: [
    {id: 42, name: 'Frame Members', pass: false},
    {id: 44, name: 'Tire/Wheel Clearance', pass: false},
    {id: 45, name: 'Sliding Subframes', pass: false},
  ],
  tires: [
    {id: 46, name: 'Steering Tires', pass: false},
    {id: 47, name: 'Other Tires', pass: false},
    {id: 48, name: 'Speed Restricted Tires', pass: false},
  ],
  wheels: [
    {id: 49, name: 'Lock/Side Ring', pass: false},
    {id: 50, name: 'Wheels/Rims', pass: false},
    {id: 51, name: 'Fasteners', pass: false},
    {id: 52, name: 'Welds', pass: false},
  ],
  windshield: [
    {id: 53, name: 'Vision Reducing Matter', pass: false},
  ],
  wipers: [
    {id: 54, name: 'Inoperative Wiper', pass: false},
  ],
  seats: [
    {id: 55, name: 'Seats Secured', pass: false},
  ]
}



// MongoDB stuff
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}


import React, { Component } from "react";
import SummaryItem from "./SummaryItem";

export default class Summary extends Component {
  render() {
    return this.props.items.brakes.map(item => (
      <SummaryItem item={item} key={item.id} />
    ));
  }
}
