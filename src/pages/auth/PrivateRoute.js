import React from 'react'
import useAuth from '../../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth();

    return currentUser ? children : <Navigate to='/login'/>
}

export default PrivateRoute




// import { useSelector } from "react-redux"
// import {selectIsLoggedIn} from "../../redux/authSlice"

// export const LoggedIn = ({children}) => {
// // 
//     const isLoggedIn = useSelector(selectIsLoggedIn)

//     if(isLoggedIn){
//         return children
//     }
//     return null
// }

// export const OnLogout = ({children}) => {

//     const isLoggedIn = useSelector(selectIsLoggedIn)

//     if(!isLoggedIn){
//         return children
//     }
//     return null
// }

// export default LoggedIn
