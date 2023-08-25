import GoogleMapReact from 'google-map-react'
import MarkerIcons from './MarkerIcons'


// accepted props(center,zoom and nasaData)
const Map = ({ center, zoom, nasaData })=> {

// map over the nasaData
    const Fire =  nasaData ? nasaData.events.map((evt,index) =>{
      console.log(evt.geometry[0].coordinates[0])
      return (
       
     
            <MarkerIcons
                lat={evt.geometry[0].coordinates[0]}
                lng={evt.geometry[0].coordinates[1]}
                key={index}
            />
      );   
}) : ""
 console.log(Fire)
return (
      <div className="map-marker">
                  <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_api_key}}
                        defaultCenter={ center }
                        defaultZoom={ zoom }
                >
                        {nasaData? 
                              <MarkerIcons
                              lat={nasaData.events[0].geometry[0].coordinates[0]}
                              lng={nasaData.events[0].geometry[0].coordinates[1]}
                              />
                              : ""
                        }
                </GoogleMapReact>
      </div>
   )
}

export default  Map;