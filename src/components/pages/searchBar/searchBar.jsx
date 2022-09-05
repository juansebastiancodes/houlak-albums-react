import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import './searchBar.css'

const SearchBar = (props) => {
    const [input, setInput] = useState('');

    const handleInputChange = (inputValue) => {
        setInput(inputValue);
    };

    const searchAlbums = () => {
        props.onSearchClick(input);
    };

    return (
        <div class='searchBar'>
            <title className=''>Artist</title>
            <div className='searchContainer'>
                <TextField variant="standard" id="standard-basic" label="Artist" type='text' className='input-container' onChange={(e) => { handleInputChange(e.target.value) }}></TextField>
                <Button className='searchButton' color="primary" size="large" startIcon={<SearchIcon className='searchIcon'/>} onClick={searchAlbums}>
                </Button>
            </div>
        </div>
    )
};

export default SearchBar;