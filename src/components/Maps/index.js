import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

// STYLE
import { WrapperMap } from './style'

const Map = ({longitude, latitude}) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    width: '100%',
    height: '100%',
    zoom: 17
  })


  return (
    <WrapperMap>
        <ReactMapGL
          mapStyle="mapbox://styles/jhonatancunha1/ckbidrmem1anr1iqhj66rptq3"
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
    </WrapperMap>
  )
}

export default Map 