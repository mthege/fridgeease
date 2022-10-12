import React from 'react'
import './Fridge.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Ingredients from '../../components/Ingredients'
import Navbar from "../../components/Navbar/Navbar";
import Topbar from '../../components/Topbar/Topbar'; 
import FilterBar from '../../components/FilterBar/FilterBar';
function Fridge() {
    return (
        <div>
            <Topbar/>
            <FilterBar/>
            <SearchBar/>
            <Ingredients/>
            <Navbar/> 
        </div>
    )
}

export default Fridge
