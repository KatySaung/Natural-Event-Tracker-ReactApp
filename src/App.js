import { useState, useEffect } from "react"
import Map from "./components/Map"

function App( ) {
  // useState setter function to hold nasa data. 
  // useState setter function for loading
 // callback function,useEffect to get data from Nasa API in function fetchData
  const [nasaData, setNasaData] = useState(null);
  useEffect(( ) => {
    const fetchData = async ( ) => {
    try {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?category=severeStorms,wildfires,volcanoes");
      const Event  = await res.json( )
      setNasaData(Event);

    }catch (err) {
      console.error("error during fetch nasa data", err)
    }  
}
fetchData( )
},  [ ] )
console.log(nasaData);


  function fire( ) {
    if (nasaData) {
      nasaData.events.map(evt => {
        if (evt.categories[0].id === "wildfires") {
          console.log(evt.geometry[0].coordinates)
        }
      })
    }
  }

  return (
    <div>
      <h1>Natural Event Tracker - Nasa Data</h1>
      <Map  />
    </div>
  );

}
export default App;
