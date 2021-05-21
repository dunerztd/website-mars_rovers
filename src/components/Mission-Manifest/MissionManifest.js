import LandingDate from './Landing-Date/LandingDate'
import LaunchDate from './Launch-Date/LaunchDate'
import Status from './Status/Status'
import MaxSol from './Max-Sol/MaxSol'
import MaxDate from './Max-Date/MaxDate'
import TotalPhotos from './Total-Photos/TotalPhotos'

const MissionManifest = ({ error, isLoaded, items }) => {


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <LaunchDate launchDate={items.photo_manifest.launch_date} />
        <LandingDate landingDate={items.photo_manifest.landing_date} />
        <Status status={items.photo_manifest.status} />
        <MaxSol maxSol={items.photo_manifest.max_sol} />
        <MaxDate maxDate={items.photo_manifest.max_date} />
        <TotalPhotos totalPhotos={items.photo_manifest.total_photos} />
        <br />
      </div>
    )
  }
}

export default MissionManifest