import GoogleMapReact from 'google-map-react'
import MapMarker from './MarkerIcons'

const Map = ({ center, zoom, nasaData })=> {

  // TO FIX MAP NOT HAVING MARKERS, creat function to initalize here? ERROR google not defined in line 10&12 and line 18 not valid map id. DO I NEED MAP ID TO USE GOOGLE MAPS?
  // let map;

  // async function initMap( ){
  //   const position = { lat: 42.5158, lng: -124.0372};
  //   const { Map } = await google.maps.importLibrary("maps");
  //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //   map = new Map(document.getElementById("map"), {
  //     zoom: 11,
  //     center: position,
  //     mapID: "DEMO_MAP_ID"
  //   });

    // NEED HELP: place ForEach here to loop through nasa data on map with plotted icons, include lat&lng?
//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Locationonmap",

//         const volcanoesMark = [ ];
//         volcanoes.forEach((volcanoe, index)) => {
//           volcanoesMark.push(
//             <div key = {index}>
//               <div>Category: {volcanoe.category}</div>
//               <div>Location: {volcanoe.location}</div>
//               <div>Date: {volcanoe.date}</div>
//               </div>
//           );
//       });
//        return volcanoesMark;

// }
// initMap();

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
      </div>
   )

}
export default  Map