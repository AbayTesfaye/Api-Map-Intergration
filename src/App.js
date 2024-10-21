import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 31.734739,
  lng: 34.991741,
};

// AlzaSyNHPv2bxy4LgEwiWgUPBoB2flUM5K6FmTf  temporary api

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AlzaSyNHPv2bxy4LgEwiWgUPBoB2flUM5K6FmTf">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
