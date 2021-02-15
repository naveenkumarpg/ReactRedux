import React, { useState, useEffect } from "react";

const initialLocation = {
  longitude: null,
  latitude: null,
  speed: null,
};

function App() {
  const [{ longitude, latitude, speed }, setLocation] = useState(
    initialLocation
  );

  let mounted = true;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(hendleGeoLocation);
    const watchId = navigator.geolocation.clearWatch(hendleGeoLocation);

    return () => {
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  });

  const hendleGeoLocation = (event) => {
    if (mounted) {
      setLocation({
        longitude: event.coords.longitude,
        latitude: event.coords.latitude,
        speed: event.coords.speed,
      });
    }
  };

  return (
    <>
      <h2>GEO Location details</h2>
      <p>Longitude : {longitude}</p>
      <p>Latitude : {latitude}</p>
      {speed && `<p> Speed: ${speed}</p>`}
    </>
  );
}

export default App;

/**
 *
 * This code is all talks about how to clear the event on unmount for browser Api's
 * De-Structuting useState variables
 * how to stop rerendering if the component is already un-mounted event does not have way to clear/unbind the evnts Ex: mounted
 *
 */
