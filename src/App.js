import { useState } from 'react'
import axios from 'axios'

import Search from "./components/Search";
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    searchResults: [],
  })
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=be4b3906';
  
  const handleSearch = e => {
    const requestURL = `${API_URL}&s=${state.searchQuery}&type=movie`;
    if (e.key === 'Enter') {
      axios
        .get(requestURL)
        .then( ({ data }) => {
          const searchResults = data.Search ? data.Search : []; 
          setState(prevState => {
            return { ...prevState, searchResults}
          })
        });
    }
  }

  const handleInput = e => {
    const searchQuery = e.target.value; 
    setState(prevState => {
      return { ...prevState, searchQuery}
    })
  };
  
  return (
    <div className="container">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch}/>
        <Results searchResults={state.searchResults} />
      </main>
    </div>
  );
}

export default App;
