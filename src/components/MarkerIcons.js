import { Icon } from "@iconify/react";


const MapMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="marker-icon" onClick={onClick}>
    <Icon icon="mdi:fire-alert" style={{ color: "red" }} className="fire-icon" onClick={onClick}/>
    <Icon icon="mdi:weather-hurricane" style={{ outlineColor: "red", color: "white" }} className="severestorm-icon" onClick={onClick}/>
    </div>
  )
}


export default MapMarker