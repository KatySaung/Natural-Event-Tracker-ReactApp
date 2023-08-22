import GoogleMapReact from 'google-map-react'


const Map = ({ center, zoom}) => {
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_api_key}}
                defaultCenter={ center }
                defaultZoom={ zoom }>
        </GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center: { lat: 25.761681, lng: -80.191788 },
    zoom: 10
 }

   export default Map
