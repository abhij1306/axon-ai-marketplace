import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthStyles.scss';

const Signup: React.FC = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Create Account</h2>
                <p className="subtitle">Join the future of AI automation</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="name@company.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-submit">
                        Sign Up
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
