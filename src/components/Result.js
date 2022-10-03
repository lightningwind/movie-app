import React from 'react'

function Result( {searchResult} ) {
  return (
    <div className='result'>
        <img src={searchResult.Poster} className='poster'/>
        <h3 className='title'>{`${searchResult.Title} (${searchResult.Year})`}</h3>
        <button>LABEL</button>
    </div>
  )
}

export default Result