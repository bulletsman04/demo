import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Room.css";
import DeviceList from "../components/DeviceList";
import AddDevice from "../components/AddDevice";

class BedRoom extends Component {
  counter = 5;
  state = {
    devices: [
      {
        id: 0,
        deviceName: "Lamp",
        toggle: true,
        percent: false,
        alwaysRunning: false,
      },
      {
        id: 1,
        deviceName: "TV",
        toggle: true,
        percent: true,
        alwaysRunning: false,
      },
      {
        id: 2,
        deviceName: "Air Conditioner",
        toggle: true,
        percent: true,
        alwaysRunning: false,
      },
      {
        id: 3,
        deviceName: "Fridge",
        toggle: true,
        percent: false,
        alwaysRunning: true,
      },
    ],
  };
  addDevice = (text) => {
    const device = {
      id: this.counter,
      text,
    };
    this.counter++;
    console.log(device, this.counter);

    this.setState((prevState) => ({
      devices: [...prevState.devices, device],
    }));

    return true;
  };
  render() {
    return (
      <div>
        <div className="head">
          <NavLink to="/" exact={true}>
            <i class="fas fa-arrow-left"></i>
          </NavLink>
          <h1>Living Room</h1>
          <p className="members">3 family members have access</p>
        </div>
        <div className="devicesList">
          <AddDevice add={this.addDevice} />
          <DeviceList devices={this.state.devices} />
        </div>
      </div>
    );
  }
}

export default BedRoom;
