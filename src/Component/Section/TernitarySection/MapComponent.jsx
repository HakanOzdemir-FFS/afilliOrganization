import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const MapClickHandler = ({ lat, lng }) => {
  useMapEvents({
    click: () => {
      window.open(
        `https://www.google.com/maps/place/Afilli+Organizasyon/@36.962254,30.7063985,15z/data=!4m2!3m1!1s0x0:0xb43f780d118be7ec?sa=X&ved=2ahUKEwi1s5Kz-O6BAxXlQvEDHXKIDp8Q_BJ6BAg9EAA&ved=2ahUKEwi1s5Kz-O6BAxXlQvEDHXKIDp8Q_BJ6BAhKEAg`,
        "_blank"
      );
    },
  });

  return null;
};

const MapComponent = () => {
  const defaultCenter = {
    lat: 36.962254,
    lng: 30.7063985,
  };

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      className="rounded-md shadow-lg w-[100%] h-[500px]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={customIcon} position={defaultCenter}>
        <Popup>Buradayız!</Popup>
      </Marker>
      <MapClickHandler lat={defaultCenter.lat} lng={defaultCenter.lng} />
    </MapContainer>
  );
};

export default MapComponent;
