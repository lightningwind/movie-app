import React from 'react'

function Result( {searchResult} ) {
  return (
    <div>
        <img src={searchResult.Poster} />
        <h3>{searchResult.Title}</h3>
        <p>{searchResult.Year}</p>
        <button>LABEL</button>
    </div>
  )
}

export default Result