import Toggler from "../components/Toggler";

const Device = (props) => {
  return (
    <div className="deviceContainer">
      <p>{props.device.deviceName}</p>
      <Toggler />
    </div>
  );
};

export default Device;
