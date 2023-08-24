import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MarkerIcons from './MarkerIcons'


const Map = ( { center, zoom })=> {
return (
      <div className="map-marker">
                  <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_api_key}}
                        defaultCenter={center}
                        defaultZoom={zoom}
                >
                  <MarkerIcons
                            lat={center.lat}
                            lng={center.lng}
                            
                          />
                </GoogleMapReact>
      </div>
   )
}
Map.defaultProps = {
    center:{
      lat: 59.955413,
      lng: 30.337844,
    },
      zoom: 11

}

export default Map