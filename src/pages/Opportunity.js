import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'
import Search from '../components/Search/Search'

import './opportunity.css'

const Opportunity = () => {
  return (
    <div className="container">
      <div className="side-bar">
        <RoverHeading roverHeading='Opportunity'/>
        <MissionManifest rover='Opportunity'/>
        <div className="search">
          <Search rover='Opportunity' />
        </div>
      </div>
      <div className="main"><br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus aspernatur deserunt. Iste alias debitis aspernatur, architecto ratione reprehenderit voluptatum doloremque quisquam officiis tenetur ducimus obcaecati doloribus quae praesentium nisi.
      </div>
    </div>
  )
}

export default Opportunity
