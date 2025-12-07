import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthStyles.scss';

const Login: React.FC = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Welcome Back</h2>
                <p className="subtitle">Log in to your Axon AI account</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="name@company.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-submit">
                        Log In
                    </button>
                </form>

                <div className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
