import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import Location from './Location/Location';
import DisplayInfo from './DisplayInfo/DisplayInfo';
import './App.css';

const api = {
  key: "c4911c8f7142317342f4e7447b10513f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  // const [background, setBackground] = ('');

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }

  //{className = background ? warmBg : coldBg}

  return (
    <div className='App'>

      <SearchBar 
      query={query}
      setQuery={setQuery}
      search={search}
      />
      <Location />

      <DisplayInfo 
        weather={weather}
        query={query}
        

      />

    </div>
  );
}

export default App;
