import { useState, useEffect, useRef} from 'react'

import './search.css'

const Search = ({ items, dateInputOnSubmit, setDateInputOnSubmit }) => {

  const [search, setSearch] = useState([])
  const [dateInput, setDateInput] = useState()

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setSearch( items.photo_manifest.photos.filter(x => x.earth_date === dateInputOnSubmit) )
  }},[dateInputOnSubmit])

  const handleChange = (event) => {
    setDateInput(event.target.value)
  }

  const handleSubmit = () => {
    setDateInputOnSubmit(dateInput)
  }
  
  const SearchResults = () => {

    if (search.length === 0) {
      return ( 
        <div><br />6 hours, 19 minutes right ascension. 14 degrees, 58 minutes declination...... No sighting</div> 
        )
      } else {
          return (
            <div>
            <br />
              <div>Sol: {search[0].sol}</div>
              <div>Earth Date: {search[0].earth_date}</div>
              <div>Total Photos: {search[0].total_photos}</div>
              <div>Cameras: {search[0].cameras.join(', ')}</div>
            </div>
          )
      }
    }

  // const HideSearchBar = () => {
  //   var coll = document.getElementsByClassName("search-bar");
  //   var i;

  //   for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function() {
  //       this.classList.toggle("active");
  //       var content = this.nextElementSibling;
  //       if (content.style.display === "block") {
  //         content.style.display = "none";
  //       } else {
  //         content.style.display = "block";
  //       }
  //     });
  //   }
  // }

  return (
    <div>
        <div className="search-bar" >
          <input type="date" value={dateInput} onChange={handleChange} />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      <div className="search-bar-content" >
        <SearchResults />
      </div>
    </div>
  )

}

export default Search