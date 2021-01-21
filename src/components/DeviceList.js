import Device from "./Device";

const DeviceList = (props) => {
  const devices = props.devices.map((device) => (
    <Device key={device.id} device={device} handleDeviceToogleChangedHandler = {props.handleDeviceToogleChangedHandler} />
  ));
  return <div className="roomsContainer">{devices}</div>;
};

export default DeviceList;
