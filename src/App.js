import { useState, useEffect } from "react";
import Map from "./components/Map";
import Form from "./components/Form";
import DataDisplay from "./components/DataDisplay";
import Nav from "./components/Nav"

export default function App( ) {
 
 // set state to hold nasa data
  const [nasaData, setNasaData] = useState(null);

  // Function to get nasa data
  useEffect(( ) => {
    const getNasaData = async ( ) => {
    try {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?limit=5&category=wildfires");
      const data  = await res.json( );
      setNasaData(data);

    }catch (err) {
      console.error("error during fetch nasa data", err)
    }  
}
getNasaData( )
},  [ ] )
console.log(nasaData);

  return (
    <div className="App">
      <h1>Natural Event Tracker - Nasa Data</h1>
      <Form datasearch= {FormData} />
      <DataDisplay nasaData={{nasaData}} />
      <Map  
            // Washington
            // center={{lat: 47.54, lng: 
            //   -117.7311 }} 

            // Oregon
            // center={{lat: 42.5158, lng: 
            // -124.0372 }} 

            // Arizona
            // center={{lat: 34.551083, lng: 
            // -111.466806 }} 

            // Florida
            // center={{lat: 29.229722, lng: 
            //   -81.688889 }} 

            // North Carolina
            // center={{lat: 34.870158, lng: 
            //   -77.05122 }}  


            zoom={6}
            nasaData={nasaData} 
        />
        <Nav />
    </div>
  );

}
