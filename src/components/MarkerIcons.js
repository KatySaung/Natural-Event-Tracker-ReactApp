import { Icon } from "@iconify/react";


const MarkerIcons = ({ lat, lng, onClick }) => {
  return (
    <div className="marker-icon" onClick={onClick}>
    <Icon icon="mdi:fire-alert" style={{ color: "red" }} className="fire-icon"/>
    <Icon icon="mdi:weather-hurricane" style={{ outlineColor: "red", color: "white" }} className="severestorm-icon"/>
    </div>
  )
}


export default MarkerIcons