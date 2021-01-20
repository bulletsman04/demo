import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import RoomList from "./RoomList";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <main>{<RoomList />}</main>
        </div>
      </Router>
    );
  }
}

export default App;
