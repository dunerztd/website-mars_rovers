  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return items.map(camera =>
       <div>
        <h1>{Object.keys(camera)}</h1>
        
        {camera[Object.keys(camera)].map((photo) => <a href={photo[Object.keys(photo)]} target="_blank" rel="noreferrer"><img src={photo[Object.keys(photo)]} className="photo-box" alt=""></img></a>)}

      </div>
    )
  }
}


    // use loops
    for (const camera of filteredResults) {
      for (const url of camera[Object.keys(camera)]) {
        console.log(Object.keys(url))
      }
    }