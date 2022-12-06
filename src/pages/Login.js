import React, { useState } from "react";
import {auth, providor} from '../firebase-config';
import {signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/")
            })
            .catch((error) => {
                console.log(error.message);
                alert("Could not log you in")
            })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, providor)
            .then((result) => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/")
            });
    }

    return ( 
    <div className="loginPage"> 
        <div className="loginContainer">
            <p>Login</p>
            <hr />
            <div className="inputSection">
                <input type={"email"} value={email} onChange={(e) => handleInputChangeEmail(e)} placeholder="Enter Email"/>
                <input type={"password"} value={password} onChange={(e) => handleInputChangePassword(e)} placeholder="Enter Password"/>
                <button onClick={signInWithEmail}>Login</button>
            </div>
            <p> Sign in with Google</p> 
            <hr />
            <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign in with Google</button>
        </div>
    </div>
    );
}

export default Login;