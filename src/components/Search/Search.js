import { useState } from 'react' 

const Search = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [dateInput, setDateInput] = useState()

  let rover = props.rover

  const handleChange = (event) => {
    console.log('inside handleChange');
    setDateInput(event.target.value)
  }
  
  const handleSubmit = () => {

    console.log('inside handleSubmit');

    fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K`)
      .then(res => res.json())
      .then(
        (result) => {

          console.log(result);

          let search = result.photo_manifest.photos.filter(x => x.earth_date === dateInput)

          console.log(search);
  
          setItems(search);
          setIsLoaded(true);
        })
        .catch((error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }

  const SearchResults = () => {

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <br />
          <div>Sol: {items[0].sol}</div>
          <div>Earth Date: {items[0].earth_date}</div>
          <div>Total Photos: {items[0].total_photos}</div>
          <div>
            Cameras: 
                {items[0].cameras.map((number) =>
                  `${number}, `
                )}
          </div>
        </div>
      )
    }

  }

  return (
    <div>
      <input type="date" value="dateInput" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button> 
    <SearchResults />
    </div>
  )

}

export default Search