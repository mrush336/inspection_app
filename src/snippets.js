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
  exhaust_system: [
    {id: 20, name: 'Leaking Forward/Below Cabin', pass: false},
    {id: 21, name: 'Bus Exhaust Leaking', pass: false},
    {id: 22, name: 'Exhaust Burning/Charing', pass: false},
  ],
  fuel_system: [
    {id: 23, name: 'Visible Leak', pass: false},
    {id: 24, name: 'Filler Cap', pass: false},
    {id: 25, name: 'Tank Securely Attached', pass: false},
  ],
  lighting_devices: [
    {id: 26, name: 'All Lighting Devices', pass: false},
  ],
  safe_loading: [
    {id: 27, name: 'Load/Dunnage Falling', pass: false},
    {id: 28, name: 'Cargo Shifting', pass: false},
    {id: 29, name: 'Container Securement', pass: false},
  ],
  steering_mechanism: [
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
  wheels_rims: [
    {id: 49, name: 'Lock/Side Ring', pass: false},
    {id: 50, name: 'Wheels/Rims', pass: false},
    {id: 51, name: 'Fasteners', pass: false},
    {id: 52, name: 'Welds', pass: false},
  ],
  windshield_glazing: [
    {id: 53, name: 'Vision Reducing Matter', pass: false},
  ],
  windshield_wipers: [
    {id: 54, name: 'Inoperative Wiper', pass: false},
  ],
  seats: [
    {id: 55, name: 'Seats Secured', pass: false},
  ]
}