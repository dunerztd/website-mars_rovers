import { useState, useEffect } from 'react' 

import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'
import Search from '../components/Search/Search'
import Main from '../components/Main/Main'

import './perseverance.css'

const Perseverance = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [dateInputOnSubmit, setDateInputOnSubmit] = useState()

  const rover = 'Perseverance'

    useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K`)
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
  }, [rover])

  return (
    <div className="container">
      <div className="side-bar">
        <div className="roverInfo">
          <RoverHeading roverHeading='Perseverance'/>
          <MissionManifest 
            rover='Perseverance'
            error={error}
            isLoaded={isLoaded}
            items={items}
          />
        </div>
        <div className="search">
           <Search
            items={items}
            dateInputOnSubmit={dateInputOnSubmit}
            setDateInputOnSubmit={setDateInputOnSubmit}
          />
        </div>
      </div>
      <div className="main"><br />
        <Main
          dateInputOnSubmit={dateInputOnSubmit}
          rover='Perseverance'
        />
      </div>
    </div>
  )
}

export default Perseverance