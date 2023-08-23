import { useState, useEffect } from "react"
import Map from "./components/Map"

function App( ) {
  // useState setter function to hold nasa data. 
  // useState setter function for loading
  const [nasaData, setNasaData] = useState(null);

  // callback function,useEffect to get data from Nasa API in function fetchData
  useEffect(() => {
    try {
      const fetchData = async () => {
        const resp = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?category=severeStorms,wildfires,volcanoes")
        const newData = await resp.json();
        const { Event }  = newData
        setNasaData(newData)
      }
      // line 25 console log prints x2 in Dev Tools. Why?
      fetchData()
    } catch (error) {
      console.error(error)
    }
  },  [ ])

  function fire() {
    if (nasaData) {
      nasaData.events.map(evt => {
        if (evt.categories[0].id === "wildfires") {
          console.log(evt.geometry[0].coordinates)
        }
      })
    }
  }
  // fire( )


  return (
    <div>
      <h1>Natural Event Tracker - Nasa Data</h1>
      <Map  />
  
    
    </div>
  );

}
export default App;
