import React, {useState} from 'react'
import {auth} from '../Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>console.log(auth))
        .catch(error=>console.error(error))
    }

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth=>console.log(auth))
        .catch(error=>console.error(error))
    }

    return (
        <div className="login">
            <h1>Sign In</h1>
            <label className="label">E-mail</label>
            <input onChange={(event)=> setEmail(event.target.value)} autoComplete="off" className="input" type="email"/>
            <label>Password</label>
            <input onChange={(event)=> setPassword(event.target.value)} autoComplete="off" className="input" type="password" name="password"/>
            <button onClick= {signIn} className="button">Sign In</button>
            <p> By createing... </p>
            <button onClick= {register} className="button">Create account</button>
            
        </div>
    )
}

export default Login
