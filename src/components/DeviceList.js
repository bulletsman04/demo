import Device from "./Device";

const DeviceList = (props) => {
  const devices = props.devices.map((device) => (
    <Device key={device.id} device={device} />
  ));
  return <div className="roomsContainer">{devices}</div>;
};

export default DeviceList;
