import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {BsFacebook, BsGoogle} from 'react-icons/bs'; 
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase'
import Topbar from '../../components/Topbar/Topbar';
import './Login.css'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>{navigate('/fridge')})
        .catch(error=>console.error(error))
    }

    // const register = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(auth=>{navigate('/signup')})
    //     .catch(error=>console.error(error))
    // }

    return (
         
        <div className="login">
            <Topbar/>
            <h1 className="login-h1">Logga in</h1>
            <div className="login-form">
            <label className="login-label">E-mail</label>
            <input className="input" placeholder= "E-mail" onChange={(event)=> setEmail(event.target.value)} autoComplete="off" className="input" type="email"/>
            <label className="login-label">Lösenord</label>
            <input className="input" placeholder= "Lösenord" onChange={(event)=> setPassword(event.target.value)} autoComplete="off" className="input" type="password" name="password"/>
            <button onClick= {signIn} className="login-button">Logga in</button>

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
            <p>Är du en ny användare?</p><Link to="/signup"><p>Bli medlem</p></Link>
            </div>
        </div>
    )
}

export default Login
