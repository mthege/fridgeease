import React from 'react'
import './Fridge.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Ingredients from '../../components/Ingredients'
function Fridge() {
    return (
        <div>
            <SearchBar/>
            <Ingredients/>
        </div>
    )
}

export default Fridge
