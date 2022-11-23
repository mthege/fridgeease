// import React, { useEffect } from "react";
import FilterBar from '../../components/FilterBar/FilterBar'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar';
import Topbar from '../../components/Topbar/Topbar'
import NavbarWider from '../../NavbarWider/NavbarWider';

const MyFridge = () => {
  return (
    <div>
      
      <Topbar/>
      <NavbarWider/>
      <FilterBar />
      <SearchBar/>
      <Navbar/>
    </div>
  );
};

export default MyFridge;