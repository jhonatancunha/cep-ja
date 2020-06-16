import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -23.6633,
    longitude: -52.6055,
    width: '300px',
    height: '300px',
    zoom: 12
  })

  return (
    <div>
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiamhvbmF0YW5jdW5oYTEiLCJhIjoiY2tiaWExMm1sMGFvdzJ1bmNncXQ4MjVoZCJ9.Vjs9fmFTYsCi1Mb6u84PEg"
      ></ReactMapGL>
    </div>
  )
}

export default Map