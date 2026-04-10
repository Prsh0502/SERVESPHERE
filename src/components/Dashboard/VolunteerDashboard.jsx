import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <Link to="/" className="sidebar-logo">ServeSphere</Link>
        
        <nav className="sidebar-nav">
          <div className="sidebar-item active">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </div>
          <Link to="/explore" className="sidebar-item" style={{textDecoration: 'none'}}>
            <span className="material-symbols-outlined">search</span>
            Explore Events
          </Link>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">event_available</span>
            My Schedule
          </div>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">workspace_premium</span>
            My Impact
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-mini">
            <div className="user-avatar">R</div>
            <div className="user-info-mini">
              <h4>Rahul Verma</h4>
              <p>Volunteer</p>
            </div>
            <Link to="/login" style={{marginLeft: 'auto', display: 'flex'}}>
              <span className="material-symbols-outlined" style={{color: 'var(--on-surface-variant)'}}>logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>Welcome back, Rahul!</h1>
            <p>You have 2 events coming up this week. Ready to make an impact?</p>
          </div>
          <div className="header-actions">
            <button className="btn-icon">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="btn-icon">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon"><span className="material-symbols-outlined">schedule</span></div>
            <div className="stat-info">
              <h3>120</h3>
              <p>Total Impact Hours</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'var(--tertiary-fixed)', color: 'var(--on-tertiary-fixed)'}}>
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div className="stat-info">
              <h3>15</h3>
              <p>Events Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'var(--secondary-container)', color: 'var(--on-secondary-container)'}}>
              <span className="material-symbols-outlined">local_fire_department</span>
            </div>
            <div className="stat-info">
              <h3>3</h3>
              <p>Organizations Helped</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="upcoming-events">
            <div className="section-header">
              <h2>Upcoming Schedule</h2>
              <Link to="#">View all</Link>
            </div>
            
            <div className="event-list">
              <div className="event-list-item">
                <div className="event-date-box">
                  <span className="month">Apr</span>
                  <span className="day">15</span>
                </div>
                <div className="event-item-info">
                  <h4>Mumbai Coastal Cleanup</h4>
                  <p>Sagar Mitra Abhiyan • Juhu Beach</p>
                </div>
                <div className="event-item-actions">
                  <button>Details</button>
                </div>
              </div>

              <div className="event-list-item">
                <div className="event-date-box">
                  <span className="month">Apr</span>
                  <span className="day">20</span>
                </div>
                <div className="event-item-info">
                  <h4>Bangalore Tech Mentorship</h4>
                  <p>Shiksha Foundation • Koramangala</p>
                </div>
                <div className="event-item-actions">
                  <button>Details</button>
                </div>
              </div>
            </div>
          </div>

          <div className="recent-activity">
            <div className="section-header">
              <h2>Recent Activity</h2>
            </div>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon"><span className="material-symbols-outlined">check_circle</span></div>
                <div className="activity-item-info">
                  <p>Completed <strong>Delhi Winter Clothes Drive</strong></p>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon"><span className="material-symbols-outlined">workspace_premium</span></div>
                <div className="activity-item-info">
                  <p>Earned <strong>Level 3 Volunteer</strong> Badge</p>
                  <span>1 week ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon"><span className="material-symbols-outlined">how_to_reg</span></div>
                <div className="activity-item-info">
                  <p>Enrolled in <strong>Mumbai Coastal Cleanup</strong></p>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
