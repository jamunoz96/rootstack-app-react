import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

interface Props {
  isMarkerShown: boolean
}

const Map = withScriptjs(withGoogleMap((props: Props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }} >
    {props.isMarkerShown && <Marker  position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>))

export default Map;