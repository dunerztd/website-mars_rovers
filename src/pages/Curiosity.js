import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'

const Curiosity = () => {
  return (
    <div>
      <RoverHeading roverHeading='Curiosity'/>
      <MissionManifest rover='Curiosity'/>
    </div>
  )
}

export default Curiosity