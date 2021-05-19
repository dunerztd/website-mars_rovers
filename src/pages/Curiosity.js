import MissionManifest from '../components/Mission-Manifest/MissionManifest'
import RoverHeading from '../components/Rover-Heading/RoverHeading'
import Search from '../components/Search/Search'

const Curiosity = () => {
  return (
    <div>
      <RoverHeading roverHeading='Curiosity'/>
      <MissionManifest rover='Curiosity'/>
      <Search rover='Curiosity' />
    </div>
  )
}

export default Curiosity