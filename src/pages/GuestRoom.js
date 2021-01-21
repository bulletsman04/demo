import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GuestRoom extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavLink to="/" exact={true}>
          <p>jd</p>
        </NavLink>
      </div>
    );
  }
}

export default GuestRoom;
