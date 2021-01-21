import React, { Component } from "react";
import "../styles/Toggler.css";

class Toggler extends Component {
  state = { ckechked: false };
  render() {
    return (
      <div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
}

export default Toggler;
