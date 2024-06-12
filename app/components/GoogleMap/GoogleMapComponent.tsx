import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  locations: Array<{
    lat: number;
    lng: number;
  }>;
}

const Map: React.FC<MapProps> = ({ center, locations }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
