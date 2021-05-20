import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'
import Search from '../components/Search/Search'

const Spirit = () => {
  return (
    <div>
      <RoverHeading roverHeading='Spirit'/>
      <MissionManifest rover='Spirit'/>
      <Search rover='Spirit' />
    </div>
  )
}

export default Spirit