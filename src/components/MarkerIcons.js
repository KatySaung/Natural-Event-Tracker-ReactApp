import { Icon } from "@iconify/react";


const MarkerIcons = ({ lat, lng, onClick }) => {
  return (
    <div className="marker-icon" onClick={onClick}>
    <Icon icon="mdi:fire-alert" style={{ color: "red" }}/>
    <Icon icon="mdi:weather-hurricane" style={{ outlineColor: "red", color: "white" }} />
    </div>
  )
}

export default MarkerIcons