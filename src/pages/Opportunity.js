import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'

const Opportunity = () => {
  return (
    <div>
      <RoverHeading roverHeading='Opportunity'/>
      <MissionManifest rover='Opportunity'/>
    </div>
  )
}

export default Opportunity