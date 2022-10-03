import React from 'react'

function Search(props) {
  const {handleInput, handleSearch} = props;
  return (
    <section className='search-box-wrapper'>
        <input 
          type="text" 
          placeholder='Search for a movie...' 
          className="search-box" 
          onChange={handleInput}
          onKeyUp={handleSearch}
        />
    </section>
  )
}

export default Search