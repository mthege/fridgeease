// import React, { useEffect } from "react";
import FilterBar from '../../components/FilterBar/FilterBar'
import Navbar from '../../components/Navbar/Navbar'
import Topbar from '../../components/Topbar/Topbar'
// import Login from '../auth/Login';
// import {LoggedIn, OnLogout} from '../auth/PrivateRoute';

const MyFridge = () => {
  // const url = window.location.href;

  // useEffect(() => {
  //   const scrollToProducts = () => {
  //     if (url.includes("#products")) {
  //       window.scrollTo({
  //         top: 700,
  //         behavior: "smooth",
  //       });
  //       return;
  //     }
  //   };
  //   scrollToProducts();
  // }, [url]);

  return (
    <div>
      
       <Topbar/>
        <FilterBar />
        <Navbar/>
    </div>
  );
};

export default MyFridge;