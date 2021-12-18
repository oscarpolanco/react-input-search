import { useState, useEffect } from 'react';
import './App.css';

import List from './components/List';

function App() {
  const [keyword, setKeyword] = useState('');
  const [countries, setContries] = useState([]);

  useEffect(() => {
    if(keyword.length) {
      fetch(`https://restcountries.com/v3.1/name/${keyword}`)
        .then(response => {
          if(response.ok)
            return response.json();
          else
            throw new Error('Not found');
        })
        .then(data => setContries(data))
    }
  }, [keyword]);

  const searchCountries = (e) => {
    setKeyword(e.target.value);
    setContries([]);
  }

  return (
    <div className="container">
      <input className="searchInput" onChange={(e) => searchCountries(e)} />
      {countries && <List items={countries} />}
    </div>
  );
}

export default App;
