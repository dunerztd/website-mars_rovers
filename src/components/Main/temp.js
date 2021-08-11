        {items.map((photo) =>
          {Object.keys(photo)}
        )}

        Object.values(photo).map((url) => url)

                  // {/* <h1>{Object.keys(photo)}</h1> */}

    for (const element of sorted) {
      // eslint-disable-next-line
      if (Object.keys(element) == 'Front Hazard Avoidance Camera') {
        element['Front Hazard Avoidance Camera'].push(<h1>{result.photo}</h1>)
      }

    }

    <img src={photo.img_src} className="photo-box" alt=""></img>

        return (
      <div>{items.map((photo) => {
       return <h1>{Object.keys(photo)}</h1>
      })}</div>
    )