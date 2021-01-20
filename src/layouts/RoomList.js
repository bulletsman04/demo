import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class RoomList extends Component {
  state = {
    rooms: [
      { name: "Living Room", path: "/LivingRoom" },
      { name: "Bed Room", path: "/BedRoom" },
      { name: "Guest Room", path: "/GuestRoom" },
      { name: "Kitchen", path: "/Kitchen" },
      { name: "Kids Room", path: "/KidsRoom" },
      { name: "Balcony", path: "/Balcony" },
    ],
  };

  render() {
    return (
      <nav className="main">
        <div>
          <NavLink to="/" exact={true}>
            <p>jd</p>
          </NavLink>
        </div>
        <ul>
          {this.state.rooms.map((room) => (
            <li key={room.name}>
              <NavLink to={room.path} exact={room.exact ? room.exact : false}>
                {room.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default RoomList;
