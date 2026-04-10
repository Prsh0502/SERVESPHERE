import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('volunteer'); // 'volunteer' or 'organization'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'volunteer') {
      navigate('/dashboard/volunteer');
    } else {
      navigate('/dashboard/organization');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-blob-1"></div>
      <div className="auth-bg-blob-2"></div>
      
      <Link to="/" className="back-link">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Home
      </Link>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">ServeSphere</Link>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to continue your impact journey</p>
          </div>

          <div className="auth-tabs">
            <button 
              className={`auth-tab ${role === 'volunteer' ? 'active' : ''}`}
              onClick={() => setRole('volunteer')}
            >
              Volunteer
            </button>
            <button 
              className={`auth-tab ${role === 'organization' ? 'active' : ''}`}
              onClick={() => setRole('organization')}
            >
              Organization
            </button>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder={role === 'volunteer' ? "rahul.verma@example.com" : "contact@sankalpindia.org"}
                required
              />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                required
              />
            </div>

            <div className="auth-options">
              <label style={{display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer'}}>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn-login">
              Sign In
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account? <Link to="#">Create one today</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
