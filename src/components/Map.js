import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MarkerIcons'


  const Map = ( { center, zoom })=> {
return (
      <div className="map-marker">
                  <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_api_key}}
                        defaultCenter={center}
                        defaultZoom={zoom}
                >
                  <MapMarker
                            lat={center.lat}
                            lng={center.lng}
                            
                          />
                </GoogleMapReact>
          {/* function to loop through map with MarkerIcons- NEED HELP
          for (let i=0; i <data.length; i++){
            MarkerIcons = new MapMarker({
              position: new lat(data[ i ]["lat"], data[ i ]["lng"]),
              map: Map
            })
          } */}
      </div>
   )
}
Map.defaultProps = {
    center:{
      lat: 42.5158,
      lng: -124.0372,
    },
      zoom: 11

 }
// }
export default  Map