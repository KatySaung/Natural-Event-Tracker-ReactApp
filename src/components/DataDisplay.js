export default function DataDisplay ({nasaData }){
    
        return (
          <>
          <h1>{nasaData.title}</h1>
          <h2>{nasaData.geometry}</h2>
          <h2>{nasaData.date}</h2>
          </>
        );
};
