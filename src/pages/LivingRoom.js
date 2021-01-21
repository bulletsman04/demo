import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Room.css";
import DeviceList from "../components/DeviceList";
import AddDevice from "../components/AddDevice";
import Toggler from "../components/Toggler";
import { faBoxTissue } from "@fortawesome/free-solid-svg-icons";

class LivingRoom extends Component {
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

  constructor(){
    super();
    this.roomOn = this.state.devices.findIndex(device => device.toggle === true) !== -1;
  }

  addDevice = (deviceName) => {
    const device = {
      id: this.counter,
      deviceName,
    };
    this.counter++;
    console.log(device, this.counter);

    this.setState((prevState) => ({
      devices: [...prevState.devices, device],
    }));

    return true;
  };

  handleDeviceToogleChangedHandler(id, currentToogleState) {
    const changedDevices = this.state.devices;
    changedDevices.find(device => device.id === id).toggle = currentToogleState;
    this.roomOn = changedDevices.findIndex(device => device.toggle === true) !== -1;
    this.setState((prevState) => ({
      ...prevState,
      devices: changedDevices,
    }));
  }

  handleToogleClick() {
    let changedDevices = this.state.devices;
    this.roomOn = !this.roomOn;
    changedDevices = changedDevices.map(device => device.alwaysRunning === true ? device : {...device, toggle: this.roomOn});
    
    this.setState((prevState) => ({
      ...prevState,
      devices: changedDevices,
    }));
  }

  render() {
    return (
      <div>
        <div className="head">
          <NavLink to="/" exact={true}>
            <i class="fas fa-arrow-left"></i>
          </NavLink>
          <h1>Living Room</h1>
          <p className="members">3 family members have access</p>
          <Toggler checked = {this.roomOn} handleDeviceToogleChangedHandler = {this.handleToogleClick.bind(this)}/>
        </div>
        <div className="devicesList">
          <AddDevice add={this.addDevice} />
          <DeviceList devices={this.state.devices} handleDeviceToogleChangedHandler = {this.handleDeviceToogleChangedHandler.bind(this)} />
        </div>
      </div>
    );
  }
}

export default LivingRoom;
