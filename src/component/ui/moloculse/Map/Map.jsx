import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";

function Map() {
  const position = [51.505, -0.09];

  const customIcon = L.icon({
    iconUrl: "/asad",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "400px", height: "150px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}></Marker>
    </MapContainer>
  );
}

export default Map;
