import axios from "axios";

export const getNasaNaturalEvents = async ( ) => {
  try {
    const url = "https://eonet.gsfc.nasa.gov/api/v3/events";
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
