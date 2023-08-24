import { Icon } from "@iconify/react";

export default function MarkerIcons ({ }) {


  return (
    <div className="marker-icon">
    <Icon icon="mdi:fire-alert" style={{ color: "red" }} className="fire-icon"/>
    <Icon icon="mdi:weather-hurricane" style={{ outlineColor: "red", color: "white" }} className="severestorm-icon"/>
    </div>
  )
}


