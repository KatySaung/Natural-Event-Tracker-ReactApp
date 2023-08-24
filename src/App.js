import { useState, useEffect } from "react";
import Map from "./components/Map";
import Form from "./components/Form";
import DataDisplay from "./components/DataDisplay";

export default function App( ) {
 
 // set state to hold nasa data
  const [nasaData, setNasaData] = useState(null);

  // Function to get nasa data
  useEffect(( ) => {
    const getNasaData = async ( ) => {
    try {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?&category=severeStorms,volcanoes");
      const data  = await res.json( );
      setNasaData(data);

    }catch (err) {
      console.error("error during fetch nasa data", err)
    }  
}
getNasaData( )
},  [ ] )
console.log(nasaData);

// FUNCTION TO PLOT FIRE MARKERS ON MAP IN APP or IN MAP??. Use ForEach to loop through objects in array?
  // function fireMarkers( ) {
  //   const fire = [{
  //     "categories [0] : "wildfires",
  //     "geometry [0] : "",
  //     "lat": 0,
  //     "lng":0 ,
  //   }]
  // }
   

  return (
    <div className="App">
      <h1>Natural Event Tracker - Nasa Data</h1>
      <Form datasearch= {FormData} />
      <DataDisplay nasaData={{nasaData}} />
      <Map  
            center={{lat:59.955413, lng:30.337844}} 
            zoom={11}
            nasaData={nasaData} 
        />
      <Form />
    </div>
  );

}
