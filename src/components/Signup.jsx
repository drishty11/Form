import React, { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';
import validate from '../validate';
import { Link } from 'react-router-dom'


function Signup(props) {

    var [text, setText] = useState({
        Username: "",
        email: "",
        password: "",
        ConfirmPass: ""
    });

    var [error, setError] = useState({ validate });
    var [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submitted) {
            props.SubmitForm();
        }
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h4>Register with</h4>
                    <SocialMedia />
                    <h4>or use your email address</h4>
                </div>
                <div className="form_control">
                    <input type="text" id="Username" name="Username" onChange={handleChange} value={text.Username} placeholder="Enter your Username" />
                    {error.Username ? <p>{error.Username}</p> : null}
                </div>
                <div className="form_control">
                    <input type="email" id="email" name="email" onChange={handleChange} value={text.email} placeholder="Enter your Email Address" />
                    {error.email ? <p>{error.email}</p> : null}
                </div>
                <div className="form_control">
                    <input type="password" id="password" name="password" onChange={handleChange} value={text.password} placeholder="Enter your password" />
                    {error.password ? <p>{error.password}</p> : null}
                </div>
                <div className="form_control">
                    <input type="password" id="ConfirmPass" name="ConfirmPass" onChange={handleChange} value={text.ConfirmPass} placeholder="Enter your Confirm Password" />
                    {error.ConfirmPass ? <p>{error.ConfirmPass}</p> : null}
                </div>
                <div className="button">
                    <button>Register</button>
                </div>
                <div className="already_form">
                    <p>Existing User?</p>
                    <Link to="/login">
                        <h4>Login</h4>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Signup;
