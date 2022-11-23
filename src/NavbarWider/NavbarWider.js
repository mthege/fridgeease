import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavbarWider.css'

const classNameFuncWider = ({ isActive }) => (isActive ? "active-link-wider" : "nav-link-wider");

function NavbarWider() {
    return (
        <div className="navbar-wider">
            <div className="right">
                <ul className="nav-links-wider">
                    <NavLink className={classNameFuncWider} to="/">My Fridge</NavLink>
                    <NavLink className={classNameFuncWider} to="/shoppinglist">Shopping list</NavLink>
                    <NavLink className={classNameFuncWider} to="/mypage">My Page</NavLink>
                    <NavLink className={classNameFuncWider} to="/recipes">Recipes</NavLink>
                </ul>
           </div>
        </div>
    )
}

export default NavbarWider
