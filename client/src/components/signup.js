import React from 'react';

export function Signup(props) {
    return(
        <div className="signup-form">
            <h3>Sign Up</h3>
            <form className="form-horizontal">
                <label className="email-label">Email</label>
                <input className="email-input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label className="username-label">Username</label>
                <input className="username-input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label className="password-label">Password</label>
                <input className="password-input"
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </form>
        </div>
    )
};