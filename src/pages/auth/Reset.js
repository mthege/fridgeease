// import styles from './auth.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from "react-toastify";
import Loader from '../../components/Loader/Loader'
import Topbar from '../../components/Topbar/Topbar';

function Reset() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const resetPassword = (e) => {
        e.preventDefault()
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
        .then(() => {  
            setIsLoading(false)
            toast.success("Password reset")
        })  
        .catch((error) => {
            setIsLoading(false)
           toast.error(error.message)
        });

    }

    return (
        <>
        {isLoading && <Loader/>}
        <section className="styles-auth">
        <Topbar/>
        <div className="form">
                    <h2>Reset Password</h2>
                    <form onSubmit={resetPassword}>
                        <input 
                        type="text" 
                        placeholder="Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <button 
                        type="submit"
                        className="--btn --btn-primary --btn-block">Reset Password</button>
                        <div className="auth-links">
                            <p>
                            <Link to="/login">- Login</Link>
                            </p>
                            <p>
                            <Link to="/register">- Register</Link>
                            </p>
                        </div>  
                    </form>  
                  </div> 

        </section>
        </>
    )
}

export default Reset
