import React from 'react'

function Search(props) {
  return (
    <section className='search-box-wrapper'>
        <input 
          type="text" 
          placeholder='Search for a movie...' 
          className="search-box" 
          onChange={props.handleInput}  
        />
    </section>
  )
}

export default Search