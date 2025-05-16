// components/MapSection/MapSection.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./MapSection.module.css";

// Fix default icon path issues in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapSection = () => {
  const position = [21.3891, 39.8579]; // Coordinates for Makkah

  return (
    <div className={styles.mapWrapper}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Makkah, Saudi Arabia <br /> 123 Street, House 487
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
