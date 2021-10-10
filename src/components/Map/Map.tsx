import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { useSelector } from 'react-redux';

const Map = withScriptjs(withGoogleMap(() => {
  const [currentJob, setCurrentJob] = useState(0);
  const [currentZoom, setCurrentZoom] = useState(2);
  const [currentCenter, setCurrentCenter] = useState({lat: 0, lng: 0});
  const { job:{ data }, map } = useSelector((state: any) => state);

  const handleMarker = (job : any) => {
    const jobElement = document.getElementById(`job-card-${job.id}`);
    if(jobElement){
      setCurrentJob(job.id);
      jobElement.classList.add("card-border");
      jobElement.scrollIntoView();
    }
  }

  useEffect(() => {
    setCurrentZoom(map.zoom);
    setCurrentCenter(map.center);
  }, [map])

  const handleCenterChange = () => {
    const jobElement = document.getElementById(`job-card-${currentJob}`);
    if(jobElement) {
      jobElement.classList.remove("card-border");
      setCurrentZoom(2);
    }
  }

  return (
    <GoogleMap
      zoom={currentZoom}
      onCenterChanged={() => handleCenterChange()}
      center={currentCenter} >
      
      { data.map((marker : any) => {
        return <Marker key={marker.id}
                  position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
                  onClick={() => handleMarker(marker)} />
        })
      }

    </GoogleMap>
  )

}));

export default Map;