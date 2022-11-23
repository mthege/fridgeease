import {useState} from 'react'
// import styles from './auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from '../../components/Loader/Loader'
import './auth.css';
import Topbar from '../../components/Topbar/Topbar';
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); 

    const loginUser = (e) =>{
        e.preventDefault()
        setIsLoading(true);
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            setIsLoading(false);
            toast.success("Login successful")
            navigate("/myfridge")
        })
        .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        });

    }

    return (
        <>
        {isLoading && <Loader/>}
        <section className="styles-auth">
        <Topbar/>
                <div className="form">
                    <h2>Logga in</h2>
                    
                    <form onSubmit={loginUser}>
                        <input 
                        className="input-form"
                        type="text" 
                        placeholder="Email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input 
                        className="input-form"
                        type="password" 
                        placeholder="Password" 
                        required                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <button className="login-button">Login</button>
                        <div className="auth-link">
                            <Link to="/reset">Reset Password</Link>
                         
                        <p>-- or --</p>   </div>                    
                    </form>
                    <button type="submit" className="login-google">
                        <FaGoogle color="#fff"/>
                        Login with Google</button>
                        <span className="auth-register">
                            <p>Don´t have an account?</p>
                            <Link to="/register">Register</Link>
                        </span>

                </div>

        </section>
    </>
    )
}

export default Login
