import { useState, useEffect, useRef } from 'react'

import './main.css'

const Main = ({ dateInput, rover }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateInput}&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K`)
        .then(res => res.json())
        .then(
          (result) => {
            const filtered = filterResultsByCategory(result)
            setItems(filtered)
            setIsLoaded(true);
          })
          .catch((error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }
  }, [dateInput, rover])

  const filterResultsByCategory = (result) => {

    let filteredResults = []
    const listOfCameras = ['Front Hazard Avoidance Camera', 'Rear Hazard Avoidance Camera', 'Navigation Camera', 'Panoramic Camera', 'Miniature Thermal Emission Spectrometer (Mini-TES)']

    for (const camera of listOfCameras) {

      const filtered = result.photos.filter((photo) => photo.camera.full_name == camera )

      if (filtered.length !== 0) {
        filteredResults.push({ [camera]: filtered })
      }
    }

    return filteredResults
  }

  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return items.map(camera =>
       <div>
        <h1>{Object.keys(camera)}</h1>
        
          {camera[Object.keys(camera)].map(photo =>
            <img src={photo.img_src} className="photo-box" alt=""></img>
          )}

      </div>
    )
  }
}

export default Main