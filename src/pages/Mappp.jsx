import { useState } from "react";
import { MapView, Button } from '@aws-amplify/ui-react';

import { Marker } from 'react-map-gl';
import '@aws-amplify/ui-react/styles.css';



export default function Mappp() {

    const [{ latitude, longitude }, setMarkerLocation] = useState({
        latitude: 43.061680,
        longitude: 141.361510,
      });

    const updateMarker = () =>
      setMarkerLocation({ latitude: latitude + 0.0005, longitude: longitude + 0.0005 });

    return (
    <>
    <Button onClick={updateMarker}>Move Marker</Button>
    <MapView 
    initialViewState={{
        latitude: 43.061680,
        longitude: 141.361510,
        zoom: 14,
      }}
      >
        <Marker latitude={latitude} longitude={longitude} />          
      </MapView>;
    </>
    )
}
