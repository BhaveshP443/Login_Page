import React, { useState } from 'react';
import './HomePage.css';
import { RefreshCw, Plus, ChevronDown, Menu, X } from 'lucide-react';
import { FiPhone, FiLogOut } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { IoIosCloudOutline } from 'react-icons/io';
import { LuBookText } from 'react-icons/lu';
import { IoCodeSlashOutline, IoSettingsOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import profile from "../assests/profile.jpg"

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const repositories = [
    {
      name: 'design-system',
      type: 'Public',
      language: 'React',
      size: '7320 KB',
      updatedDays: 1
    },
    {
      name: 'codeant-ci-app',
      type: 'Private',
      language: 'JavaScript',
      size: '5871 KB',
      updatedDays: 2
    },
    {
      name: 'analytics-dashboard',
      type: 'Private',
      language: 'Python',
      size: '4521 KB',
      updatedDays: 5
    },
    {
      name: 'mobile-app',
      type: 'Public',
      language: 'Swift',
      size: '3006 KB',
      updatedDays: 3
    },
    {
      name: 'e-commerce-platform',
      type: 'Private',
      language: 'Java',
      size: '6210 KB',
      updatedDays: 6
    },
    {
      name: 'blog-website',
      type: 'Public',
      language: 'HTML/CSS',
      size: '1876 KB',
      updatedDays: 4
    },
    {
      name: 'social-network',
      type: 'Private',
      language: 'PHP',
      size: '5442 KB',
      updatedDays: 7
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="home-grid-layout">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Left Section */}
      <aside className={`home-left-section ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="app-header">
          <img src={profile} alt="app-logo" className="app-logo" />
          <span className="app-name">CodeAnt AI</span>
        </div>

        <div className="home-user-info">
          <div className="home-user-name">
            <span>UtkarshDhairyawan</span>
            <ChevronDown />
          </div>
        </div>

        <ul className="home-nav-links">
          <li onClick={() => setIsMobileMenuOpen(false)}>
            <BiHome className="nav-icon" />Repositories
          </li>
          <li onClick={() => setIsMobileMenuOpen(false)}>
            <IoCodeSlashOutline className="nav-icon" />AI Code Review
          </li>
          <li onClick={() => setIsMobileMenuOpen(false)}>
            <IoIosCloudOutline className="nav-icon" />Cloud Security
          </li>
          <li onClick={() => setIsMobileMenuOpen(false)}>
            <LuBookText className="nav-icon" />How to Use
          </li>
          <li onClick={() => setIsMobileMenuOpen(false)}>
            <IoSettingsOutline className="nav-icon" />Settings
          </li>
        </ul>

        <div className="home-support-logout">
          <span><FiPhone className="nav-icon" />Support</span>
          <span><FiLogOut className="nav-icon" />Logout</span>
        </div>
      </aside>

      {/* Right Section */}
      <main className="home-right-section">
        <div className="home-header">
          <div className="home-header-left">
            <h1>Repositories</h1>
            <span>33 total repositories</span>
          </div>
          <div className="home-header-right">
            <button className="home-refresh-btn">
              <RefreshCw />
              <span className="btn-text">Refresh All</span>
            </button>
            <button className="home-add-btn">
              <Plus />
              <span className="btn-text">Add Repository</span>
            </button>
          </div>
        </div>

        <div className="home-search-bar">
          <input type="text" placeholder="Search Repositories" />
        </div>

        <ul className="home-repo-list">
          {repositories.map((repo) => (
            <li key={repo.name} className="home-repo-item">
              <div className="home-repo-details">
                <div className="home-repo-title">
                  <h3>{repo.name}</h3>
                  <span className={repo.type === 'Private' ? 'home-repo-type-private' : 'home-repo-type-public'}>
                    {repo.type}
                  </span>
                </div>
                <div className="home-repo-meta">
                  <div className="language-indicator">
                    {repo.language}<GoDotFill style={{ color: 'blue', fontSize: '20px' }} />
                  </div>
                  <span className="size-info">{repo.size}</span>
                  <span className="update-info">Updated {repo.updatedDays} days ago</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;