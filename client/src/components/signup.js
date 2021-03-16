import React from 'react';

function SignupForm(props) {
    return (
        <form className="signup-form">
            <div className="form-group">
                <label className="username-label">Username</label>
                <input className="username-input"
                    name="username"
                    value={props.signup}
                    onChange={props.handleInputChange}
                    type="text"
                    id="username"
                    placeholder="Enter a username"
                />
                <label className="email-label">Email</label>
                <input className="email-input"
                    name="email"
                    value={props.signup}
                    onChange={props.handleInputChange}
                    type="text"
                    id="email"
                    placeholder="Enter your email address"
                />
                <label className="password-label">Password</label>
                <input className="password-input"
                    name="password"
                    value={props.signup}
                    onChange={props.handleInputChange}
                    type="text"
                    id="password"
                    placeholder="Enter a password"
                />
            </div>
        </form>
    )
}

export default SignupForm;