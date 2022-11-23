import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import {GiForkKnifeSpoon} from 'react-icons/gi'; 
import {RiFridgeLine} from 'react-icons/ri';
import {BsListCheck} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import { IconContext } from 'react-icons';

const classNameFunc = ({ isActive }) => (isActive ? "active-link" : "nav-link");

function Navbar() {
    return (
        <div className="navbar">
           <ul className="nav-links">
            <IconContext.Provider value={{size: 30}}>
              <NavLink className={classNameFunc} to="/recipes"><GiForkKnifeSpoon/><br/>Recipes</NavLink>
              <NavLink className={classNameFunc}to="/"><RiFridgeLine/><br/>My Fridge</NavLink>
              <NavLink className={classNameFunc} to="/shoppinglist"><BsListCheck/><br/>Shopping list</NavLink>
              <NavLink className={classNameFunc} to="/mypage"><BiUser/><br/>My Page</NavLink>
              </IconContext.Provider>
           </ul>
        
        </div>
    )
}

export default Navbar
