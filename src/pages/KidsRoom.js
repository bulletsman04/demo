import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class KidsRoom extends Component {
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

export default KidsRoom;
