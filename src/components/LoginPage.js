import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import profile from "../assests/profile.jpg"
import logo from "../assests/logo.jpg"

const LoginPage = () => {
  const [selectedOption, setSelectedOption] = useState('saas');
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    // You can add actual authentication logic here
    console.log(`Logging in with ${provider}`);
    navigate('/home');
  };

  const renderLoginOptions = () => {
    if (selectedOption === 'saas') {
      return (
        <>
          <button className="login-button" onClick={() => handleLogin('GitHub')}>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>
          <button className="login-button" onClick={() => handleLogin('Bitbucket')}>
            <div className="icon bitbucket-icon"></div>
            Sign in with Bitbucket
          </button>
          <button className="login-button" onClick={() => handleLogin('Azure')}>
            <div className="icon azure-icon"></div>
            Sign in with Azure DevOps
          </button>
          <button className="login-button" onClick={() => handleLogin('GitLab')}>
            <svg className="icon gitlab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
            </svg>
            Sign in with GitLab
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="login-button" onClick={() => handleLogin('Self-Hosted-GitLab')}>
            <svg className="icon gitlab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
            </svg>
            Self Hosted GitLab
          </button>
          <button className="login-button" onClick={() => handleLogin('SSO')}>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.998 0C5.366 0 0 5.367 0 12a12 12 0 0012 12c6.633 0 12-5.367 12-12S18.631 0 11.998 0zM8.03 8.53c.03-.318.337-.56.657-.56h6.625c.32 0 .628.242.657.56l.432 4.468c.03.318-.189.58-.509.58H8.107c-.32 0-.539-.262-.509-.58l.432-4.468zM12 17.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" />
            </svg>
            Sign in with SSO
          </button>
        </>
      );
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="stats-container">
          <div className="stats-card">
            <div className="stats-header">
              <div className="avatar">
                <img src={profile} alt="avatar" className="avatar" />
              </div>
              <span>AI to Detect & Autofix Bad Code</span>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">30+</div>
                <div className="stat-label">Language Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Developers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100K+</div>
                <div className="stat-label">Hours Saved</div>
              </div>
            </div>
          </div>
          <div className="issues-card">
            <div className="issues-header">
              <div className="issues-icon">
                <img src={logo} alt="logo" className="issues-icon" />
              </div>
              <div className='growth'>
                <div className="growth-indicator">↑ 14%</div>
                <div className="growth-text">This week</div>
              </div>
            </div>
            <div className="issues-content">
              <div className="issues-label">Issues Fixed</div>
              <div className="issues-value">500K+</div>
            </div>
          </div>
        </div>
        <div className="brand-logo">
          <img src={profile} alt="Brand Logo" className="brand-logo-image" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-form">
          <div className="app-header">
            <div className="app-logo">
              <img src={profile} alt="app-logo" className="app-logo" />
            </div>
            <span className="app-name">CodeAnt AI</span>
          </div>

          <h1>Welcome to CodeAnt AI</h1>

          <div className="hosting-options">
            <button 
              className={`hosting-button ${selectedOption === 'saas' ? 'active' : ''}`}
              onClick={() => setSelectedOption('saas')}
            >
              SAAS
            </button>
            <button 
              className={`hosting-button ${selectedOption === 'self-hosted' ? 'active' : ''}`}
              onClick={() => setSelectedOption('self-hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="login-options">{renderLoginOptions()}</div>

          <p className="privacy-notice">
            By signing up you agree to the{' '}
            <a href="/" className="privacy-link">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;