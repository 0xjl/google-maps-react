import { useEffect, useRef } from 'react';

export default function MapComponent() {
  const ref = useRef();
  const options = {
    center: { lat: 52.107385, lng: 5.271671 },
    zoom: 8,
  };

  useEffect(() => {
    new window.google.maps.Map(ref.current, options);
  });

  return <div ref={ref} id='map' />;
}
