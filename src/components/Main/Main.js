import { useState, useEffect, useRef } from 'react'

import './main.css'

const Main = ({ dateInputOnSubmit, rover }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateInputOnSubmit}&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K&page=1`)
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
  }, [dateInputOnSubmit, rover])

  const filterResultsByCategory = (result) => {

    let filteredResults = []
    const listOfCameras = ['Front Hazard Avoidance Camera', 'Rear Hazard Avoidance Camera', 'Navigation Camera', 'Panoramic Camera', 'Mast Camera', 'Chemistry and Camera Complex', 'Mars Hand Lens Imager', 'Mars Descent Imager', 'Miniature Thermal Emission Spectrometer (Mini-TES)']

    for (const camera of listOfCameras) {

      const photoUrls = result.photos.filter((photo) => photo.camera.full_name === camera).map((x) => x.img_src)

      if (photoUrls.length !== 0) {
        filteredResults.push({ [camera]: photoUrls })
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
        
        {camera[Object.keys(camera)].map(photo => <a href={photo} target="_blank" rel="noreferrer"><img src={photo} className="photo-box" alt=""></img></a>)}

      </div>
    )
  }
}

export default Main