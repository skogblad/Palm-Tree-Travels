import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { CuratedDestination } from "../../models/curatedDestinations";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router";
import styles from "./MapView.module.scss";

// Fixes the default icon for Leaflet (otherwise no markers will be displayed)
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type MapViewProps = {
  destinations: CuratedDestination[];
}

export const MapView = ({ destinations }: MapViewProps) => {

  if (destinations.length === 0) {
    return null;
  }

  // Calculate the average latitude of all destinations to center the map roughly in the middle
  const avgLat = destinations.reduce((sum, d) => sum + d.lat, 0) / destinations.length;
  const avgLon = destinations.reduce((sum, d) => sum + d.lon, 0) / destinations.length;

  const center: [number, number] = [avgLat, avgLon];

  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        center={center} 
        zoom={3} 
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {destinations.map((d) => (
          <Marker key={d.id} position={[d.lat, d.lon]} icon={icon}>
            <Popup className={styles.popupLink}>
              <Link to={`/destination/${d.id}`} >
                <strong>{d.name}</strong>
                <br />
                {d.country}
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};