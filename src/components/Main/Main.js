import { useState, useEffect, useRef } from 'react'
import ReactPaginate from 'react-paginate'

import './main.css'

const Main = ({ dateInputOnSubmit, rover }) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [perPage, setPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(0)
  const [paginatedData, setPaginatedData] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateInputOnSubmit}&api_key=ZaPnrNa5wS9iCzvEvDvbrln3R3KVVMqhE785I25K`)
        .then(res => res.json())
        .then((result) => {
          setItems(result)
          paginateData(result)
          setIsLoaded(true)
        })
        .catch((error) => {
          setError(error);
          setIsLoaded(true);
        })
    }
  }, [dateInputOnSubmit, rover])

  const paginateData = (result) => {
    setCurrentPage(0)

    const slice = result.photos.slice(0, 0 + perPage)
    
    setPaginatedData(slice)
    setPageCount(Math.ceil((result.photos).length / perPage))
  }

  const PhotoGallery = () => {
    let prev = ''

    return paginatedData.map((photo) => {
      if (photo.camera.full_name === prev) {

        prev = photo.camera.full_name

        return (
          <a href={photo.img_src} target="_blank" rel="noreferrer"><img src={photo.img_src} className="photo-box" alt=""></img></a>
        )
      } else {

        prev = photo.camera.full_name

        return (
          <>
            <h3>{photo.camera.full_name}</h3>
            
            <a href={photo.img_src} target="_blank" rel="noreferrer"><img src={photo.img_src} className="photo-box" alt=""></img></a>
          </>
        )
      }
    }) 
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = selectedPage * perPage

    setCurrentPage(selectedPage)

    const slice = items.photos.slice(offset, offset + perPage)
    setPaginatedData(slice)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="gallery">
          <PhotoGallery />
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
          />
      </div>
    )
  }
}

export default Main