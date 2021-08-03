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
            setItems(result);
            setIsLoaded(true);
          })
          .catch((error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }
  }, [dateInput, rover])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.photos.map((photo) =>
          <img src={photo.img_src} className="photo-box" alt=""></img>
        )}
      </div>
    )
  }
}

export default Main