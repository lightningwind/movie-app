import { useState } from 'react'

import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
  })
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=be4b3906';
  
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
        <Search handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
