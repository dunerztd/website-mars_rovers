import { useState, useEffect } from 'react' 

import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'
import Search from '../components/Search/Search'

import './opportunity.css'

const Opportunity = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const rover = 'Opportunity'

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
        <RoverHeading roverHeading='Opportunity'/>
        <MissionManifest 
          rover='Opportunity'
          error={error}
          isLoaded={isLoaded}
          items={items}  
        />
        <div className="search">
          <Search items={items}  />
        </div>
      </div>
      <div className="main"><br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus aspernatur deserunt. Iste alias debitis aspernatur, architecto ratione reprehenderit voluptatum doloremque quisquam officiis tenetur ducimus obcaecati doloribus quae praesentium nisi.
      </div>
    </div>
  )
}

export default Opportunity
