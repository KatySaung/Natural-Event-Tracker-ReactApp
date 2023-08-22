import { useState, useEffect } from "react"
import Map from "./components/Map"

function App( ) {

// useState setter function to hold nasa data. 
// useState setter function for loading
  const [nasaData, setNasaData] = useState(null);
  const [loading, setLoading] = useState(false)

// callback function,useEffect to get data from Nasa API in function fetchData
useEffect(( ) => {
  const fetchData = async ( ) => { 
    const resp = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
    const newData= await resp.json( );
    const { events } = newData

// need to put useState outside of useEffect, prevent infinite loop?
setNasaData(newData)
  }
// line 25 console log prints x2 in Dev Tools. Why?
  fetchData( )
},  [ ])
console.log(nasaData)

      return (
          <div>
            <h1>Natural Event Tracker - Nasa Data</h1>
            <Map  nasaData={nasaData} />
            
          </div>
        );
  
  }
export default App;
