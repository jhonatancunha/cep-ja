import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'


const Map = ({longitude, latitude, altitude}) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    altitude,
    width: '100vw',
    height: '100vh',
    zoom: 16
  })


  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/jhonatancunha1/ckbid4aoa1exd1insjqfn4smg"
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiamhvbmF0YW5jdW5oYTEiLCJhIjoiY2tiaWExMm1sMGFvdzJ1bmNncXQ4MjVoZCJ9.Vjs9fmFTYsCi1Mb6u84PEg"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker  
        longitude={longitude}
        latitude={latitude}
        >
          <div ><span role="img" aria-label="icon">📌</span></div>
          
        </Marker>
      </ReactMapGL>
      
    </div>
  )
}

export default Map 