import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import {GiForkKnifeSpoon} from 'react-icons/gi'; 
import {RiFridgeLine} from 'react-icons/ri';
import {BsListCheck} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import { IconContext } from 'react-icons';

function Navbar() {
    return (
        <div className="navbar">
           <ul className="nav-links">
            <IconContext.Provider value={{size: 30}}>
              <NavLink className="nav-link" to="/recipes"><GiForkKnifeSpoon/><br/>Recipes</NavLink>
              <NavLink className="nav-link" to="/"><RiFridgeLine/><br/>My Fridge</NavLink>
              <NavLink className="nav-link" to="/shoppinglist"><BsListCheck/><br/>Shopping list</NavLink>
              <NavLink className="nav-link" to="/mypage"><BiUser/><br/>My Page</NavLink>
              </IconContext.Provider>
           </ul>
        </div>
    )
}

export default Navbar
