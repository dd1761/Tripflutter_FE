"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";

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
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);

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

  useEffect(() => {
    if (isLoaded && locations.length > 1) {
      const directionsService = new google.maps.DirectionsService();
      const origin = locations[0];
      const destination = locations[locations.length - 1];
      const waypoints = locations.slice(1, -1).map((location) => ({
        location: new google.maps.LatLng(location.lat, location.lng),
        stopover: true,
      }));

      directionsService.route(
        {
          origin: new google.maps.LatLng(origin.lat, origin.lng),
          destination: new google.maps.LatLng(destination.lat, destination.lng),
          waypoints: waypoints,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [isLoaded, locations]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {directionsResponse && (
        <DirectionsRenderer
          directions={directionsResponse}
          options={{
            suppressMarkers: false, // 마커를 표시합니다.
            markerOptions: {
              // 마커의 스타일을 여기서 설정할 수 있습니다.
            },
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMapComponent);
