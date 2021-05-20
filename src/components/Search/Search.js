import { useState } from 'react'

import './search.css'

const Search = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [dateInput, setDateInput] = useState()

  let rover = props.rover

  const handleChange = (event) => {
    setDateInput(event.target.value)
  }
  
  const handleSubmit = () => {

    fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K`)
      .then(res => res.json())
      .then(
        (result) => {

          let search = result.photo_manifest.photos.filter(x => x.earth_date === dateInput)

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
      return <div><br />Loading...</div>;
    } else {
        if (items.length === 0) {
          return ( 
            <div><br />66 hours, 19 minutes right ascension. 14 degrees, 58 minutes declination...... No sighting</div> 
          )
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

  }

  const SearchBar = () => {
    var coll = document.getElementsByClassName("search-bar");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  return (
    <div>
      <div className="search-bar" onClick={SearchBar}>
        <input type="date" value="dateInput" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="search-bar-content" >
        <SearchResults />
      </div>
    </div>
  )

}

export default Search