import React from 'react'
import { Link } from 'react-router-dom';
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
              <Link className="nav-link" to="/recipes"><GiForkKnifeSpoon/><br/>Recipes</Link>
              <Link className="nav-link" to="/"><RiFridgeLine/><br/>My Fridge</Link>
              <Link className="nav-link" to="/shoppinglist"><BsListCheck/><br/>Shopping list</Link>
              <Link className="nav-link" to="/mypage"><BiUser/><br/>My Page</Link>
              </IconContext.Provider>
           </ul>
        </div>
    )
}

export default Navbar
