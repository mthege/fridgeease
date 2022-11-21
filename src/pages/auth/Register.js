import { useState } from "react";
// import styles from "./auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import { Firestore } from "firebase/firestore";
import Topbar from "../../components/Topbar/Topbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userUid = user.uid;
        // const email = user.email; // The email of the user.
        // const displayName = user.displayName; // The display name of the user.

         // set account  doc  
        const account = {
        useruid: userUid,
        calendarEvents: []
        }
        Firestore().collection(db, 'accounts').doc(userUid).set(account);
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const navigateLogin = () => {
    navigate('/login');
  }

  return (
    <>
      {isLoading && <Loader />}
      <section className="styles-auth">
        <Topbar/>
          <div className="form">
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button onClick={navigateLogin} type="submit" className="login-button">
                Register
              </button>
            </form>

            <span className="auth-register">
              <p>Already an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
      </section>
    </>
  );
};

export default Register;