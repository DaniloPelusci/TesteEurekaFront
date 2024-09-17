import React from "react";
import './styles.css';
import api from '../../services/api'

import padlock from '../../assets/padlock.png'
import logoImage from '../../assets/logo.png'

export default function Login() {
    return (

        <div className="login-container">
            
            <section className="form">
            <img src={logoImage} alt="Login logo"/>
                <form>
                    <h1>access your accaunt</h1>
                    <input placeholder="UserName"/>
                    <input type="password" placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="Login logo"/>
        </div>


    )
}