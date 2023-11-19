import React from "react";
import "./login.css";

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">ReactRipple</h3>
                    <span className="loginDesc">
                        Explore the world around you with ReactRipple.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email or Username" className="loginInput"></input>
                        <input placeholder="Password" className="loginInput"></input>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginCreate">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;