import React from 'react';
import './SearchBar.css';

const SearchBar = ({query, setQuery, search}) => {
    return(
        <div className='search-bar-wrapper'>
            <input 
            className='search-input' 
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
    )

}

export default SearchBar;