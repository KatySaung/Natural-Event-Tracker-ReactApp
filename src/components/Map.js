import GoogleMapReact from 'google-map-react'
import MarkerIcons from './MarkerIcons'


const Map = ({nasaData, center, zoom}) => {

    
    function fire() {
        if (nasaData) {
          nasaData.events.map(evt => {
            if (evt.categories[0].id === "wildfires") {
              <MarkerIcons lat={evt.geometry[0].coordinates[1]} lng={evt.geometry[0].coordinates[0]}/>
            }
          })
        }
      }
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_api_key}}
                defaultCenter={ center }
                defaultZoom={ zoom }
                >
                    <MarkerIcons lat={center.lat} lng={center.lng} />
                    
                {/* {nasaData ? nasaData.events.map(evt => {
                    evt.categories[0].id === "wildfires" ?
                        <MarkerIcons  date={evt.geometry[0].coordinates.date} lat={evt.geometry[0].coordinates[1]} lng={evt.geometry[0].coordinates[0]} />: " "}):" "
                } */}
        </GoogleMapReact>      
        {fire( )}
        </div>
    )
}
Map.defaultProps = {
    center: { lat: 25.761681, lng: -80.191788 },
    zoom: 10
 }


   export default Map;
