import { useState, useEffect } from "react"
import Map from "./components/Map"



function App( ) {

// state to hold nasa data
  const [Nasa, setNasa] = useState(null);

// Function to get nasa data
   const getNasa = async ( ) => {
        // fetch and store resp
        const resp  = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
        // Parse JSON resp into JS object
        const data = await resp.json( );
        // set Nasa state to Nasa
        setNasa(data);
    }

      return (
          <div>
            <h1>Florida, Miami</h1>
            <Map />
          </div>
        );
  }
  
export default App;
