import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Balcony extends Component {
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

export default Balcony;
