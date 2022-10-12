import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import {BsFacebook, BsGoogle} from 'react-icons/bs'; 
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase'
import Topbar from '../../components/Topbar/Topbar';
import './Signup.css'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate('/fridge')})
        .catch(error=>console.error(error))
    }

    return (
        <div className="signup">
            <Topbar/>
            <h1 className="login-h1">Ny användare</h1>
            <div className="login-form">
            <label className="login-label">E-mail</label>
            <input className="input" placeholder= "E-mail" onChange={(event)=> setEmail(event.target.value)} autoComplete="off" className="input" type="email"/>
            <label>Password</label>
            <input className="input" placeholder= "Lösenord"onChange={(event)=> setPassword(event.target.value)} autoComplete="off" className="input" type="password" name="password"/>
            
            <button className="login-button"onClick= {register}>Logga in</button>
            
            <p className="blimedlem"><span>Eller fortsätt med</span></p>
            <div className="login-logo">
            <BsFacebook style={{
                padding: '5px 20px 20px 0px',
                }} 
                size="2rem"/>
                <BsGoogle style={{
                padding: '5px 0px 20px 20px',
                }} 
                size="2rem"/></div>
            
            </div>
        </div>
    )
}

export default Login
