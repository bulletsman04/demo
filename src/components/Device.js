import Toggler from "../components/Toggler";

const Device = (props) => {
  return (
    <div className="deviceContainer">
      <p>{props.device.deviceName}</p>
      <Toggler id = {props.device.id} checked = {props.device.toggle} handleDeviceToogleChangedHandler = {props.handleDeviceToogleChangedHandler} />
    </div>
  );
};

export default Device;
