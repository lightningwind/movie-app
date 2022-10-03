import React from 'react'

import Result from './Result';

function Results(props) {
  const { searchResults } = props;
  return (
    <section className="results">
        {searchResults.map(searchResult => 
            <Result key={searchResult.imdbID} searchResult={searchResult} />
        )}
    </section>
  )
}

export default Results