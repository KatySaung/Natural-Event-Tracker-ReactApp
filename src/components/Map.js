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
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                          />
                </GoogleMapReact>
      </div>
   )
}
Map.defaultProps = {
    center:{
      lat: 19.8967662,
      lng: -155.58278180000002,
    },
      zoom: 11

}

export default Map