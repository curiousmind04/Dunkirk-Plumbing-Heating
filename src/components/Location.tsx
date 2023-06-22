import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

import classes from "./Location.module.css";

const Location = () => {
  const center: LatLngExpression = [43.69701831327413, -79.33087165549372];
  const zoom = 10;

  const customIcon = new Icon({
    iconUrl: "/assets/icons/icon-location.svg",
    iconSize: [30, 40],
  });

  return (
    <section className={classes.container} id="map">
      <div className={classes.top}>
        <div className={classes.title}>
          <h2>Service Area</h2>
        </div>
        <p>We service in and around the Greater Toronto Area</p>
      </div>
      <div className={classes.map}>
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={customIcon}>
            <Popup>Main Office</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
