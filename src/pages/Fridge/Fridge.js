import React from 'react'
import './Fridge.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Ingredient from '../../components/Ingredient'
import Navbar from "../../components/Navbar/Navbar";
import Topbar from '../../components/Topbar/Topbar'; 
import FilterBar from '../../components/FilterBar/FilterBar';
import MyFoods from '../../components/MyFoods/MyFoods';

function Fridge() {
    return (
        <div>
            <Topbar/>
            <FilterBar/>
            <SearchBar/>
            <MyFoods/>
            <Navbar/> 
        </div>
    )
}

export default Fridge
