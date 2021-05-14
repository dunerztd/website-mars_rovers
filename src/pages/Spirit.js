import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'

const Spirit = () => {
  return (
    <div>
      <RoverHeading roverHeading='Spirit'/>
      <MissionManifest rover='Spirit'/>
    </div>
  )
}

export default Spirit