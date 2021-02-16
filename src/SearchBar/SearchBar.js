import React, {usestate} from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({query, setQuery, search}) => {
    return(
        <div className='search-bar-wrapper'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React Weather Forecast</Navbar.Brand>
                <input 
                    type='text'
                    className='search-input' 
                    placeholder='Search...'
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    />
                {/* <Button onClick={search} variant="outline-info">Search</Button> */}
            </Navbar>
        </div>
    )

}

export default SearchBar;