"use client";

import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type GoogleMapComponentProps = {
  mapContainerStyle: React.CSSProperties;
  center: {
    lat: number;
    lng: number;
  };
  locations: {
    lat: number;
    lng: number;
  }[];
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  mapContainerStyle,
  center,
  locations,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhZcRmid-_J5suMa1vMXYkVmnCcLnutT0",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      locations.forEach((loc) => bounds.extend(loc));
      map.fitBounds(bounds);
      setMap(map);
    },
    [center, locations]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map((location, index) => (
        <Marker key={index} position={location} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMapComponent);
