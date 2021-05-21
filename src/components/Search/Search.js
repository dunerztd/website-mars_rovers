import { useState } from 'react'

import './search.css'

const Search = ({ items }) => {

  const [dateInput, setDateInput] = useState()
  const [search, setSearch] = useState([])

  const handleChange = (event) => {
    setDateInput(event.target.value)
  }

  const handleSubmit = () => {
    setSearch( items.photo_manifest.photos.filter(x => x.earth_date === dateInput) )
  }
  
  const SearchResults = () => {

    if (search.length === 0) {
      return ( 
        <div><br />66 hours, 19 minutes right ascension. 14 degrees, 58 minutes declination...... No sighting</div> 
        )
      } else {
          return (
            <div>
            <br />
              <div>Sol: {search[0].sol}</div>
              <div>Earth Date: {search[0].earth_date}</div>
              <div>Total Photos: {search[0].total_photos}</div>
              <div>
                Cameras: 
                  {search[0].cameras.map((number) =>
                        `${number}, `
                  )}
              </div>
            </div>
          )
      }
    }

  const HideSearchBar = () => {
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
      <div className="search-bar" onClick={HideSearchBar}>
        <input type="date" value={dateInput} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="search-bar-content" >
        <SearchResults />
      </div>
    </div>
  )

}

export default Search