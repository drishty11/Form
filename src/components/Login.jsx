import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import validate from '../validate';
import { Link } from 'react-router-dom'

function Login() {

    var [text, setText] = useState({
        Username: "",
        password: "",
    });

    var [error, setError] = useState({ validate });

    function handleChange(event) {
        var { name, value } = event.target;

        setText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setError(validate(text));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h4>Sign in with</h4>
                    <SocialMedia />
                    <h4>or use your email address</h4>
                </div>
                <div className="form_control">
                    <input type="text" name="Username" onChange={handleChange} value={text.Username} placeholder="Enter your Username" />
                    {error.Username ? <p>{error.Username}</p> : null}
                </div>
                <div className="form_control">
                    <input type="password" name="password" onChange={handleChange} value={text.password} placeholder="Enter your password" />
                    {error.password ? <p>{error.password}</p> : null}
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
                <div class="already_form">
                    <p>New User?</p>
                    <Link to="/">
                        <h4>Register</h4>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;