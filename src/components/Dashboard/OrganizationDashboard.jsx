import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerDashboard.css'; // Reusing layout CSS

const OrganizationDashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <Link to="/" className="sidebar-logo">ServeSphere</Link>
        
        <nav className="sidebar-nav">
          <div className="sidebar-item active">
            <span className="material-symbols-outlined">dashboard</span>
            Org Overview
          </div>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">campaign</span>
            Manage Events
          </div>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">group</span>
            Volunteers
          </div>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">analytics</span>
            Impact Reports
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-mini">
            <div className="user-avatar" style={{background: 'var(--tertiary)'}}>S</div>
            <div className="user-info-mini">
              <h4>Sankalp India</h4>
              <p>Organization</p>
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
            <h1>Sankalp India Foundation</h1>
            <p>Your organization is currently hosting 4 active events. Keep up the great work!</p>
          </div>
          <div className="header-actions">
            <button className="btn-icon">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="btn-icon">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'var(--tertiary-fixed)', color: 'var(--on-tertiary-fixed)'}}>
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <div className="stat-info">
              <h3>4</h3>
              <p>Active Events</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'var(--primary-fixed)', color: 'var(--on-primary-fixed)'}}>
              <span className="material-symbols-outlined">group</span>
            </div>
            <div className="stat-info">
              <h3>45</h3>
              <p>Volunteers Enrolled</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{background: 'var(--secondary-container)', color: 'var(--on-secondary-container)'}}>
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <div className="stat-info">
              <h3>890</h3>
              <p>Total Hours Generated</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="upcoming-events">
            <div className="section-header">
              <h2>Recent Applications</h2>
              <Link to="#">Manage all</Link>
            </div>
            
            <div className="event-list">
              <div className="event-list-item">
                <div className="user-avatar" style={{width: 48, height: 48}}>P</div>
                <div className="event-item-info">
                  <h4>Priya Sharma</h4>
                  <p>Applied for: Delhi Winter Clothes Drive</p>
                </div>
                <div className="event-item-actions">
                  <button style={{background: 'var(--surface-container-high)', color: 'var(--on-surface-variant)', marginRight: '0.5rem'}}>Review</button>
                  <button>Approve</button>
                </div>
              </div>

              <div className="event-list-item">
                <div className="user-avatar" style={{width: 48, height: 48, background: 'var(--tertiary)'}}>A</div>
                <div className="event-item-info">
                  <h4>Amit Patel</h4>
                  <p>Applied for: Delhi Winter Clothes Drive</p>
                </div>
                <div className="event-item-actions">
                  <button style={{background: 'var(--surface-container-high)', color: 'var(--on-surface-variant)', marginRight: '0.5rem'}}>Review</button>
                  <button>Approve</button>
                </div>
              </div>
            </div>
          </div>

          <div className="recent-activity">
            <div className="section-header">
              <h2>System Alerts</h2>
            </div>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon"><span className="material-symbols-outlined">campaign</span></div>
                <div className="activity-item-info">
                  <p><strong>Mumbai Coastal Cleanup</strong> reaches 90% capacity</p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon"><span className="material-symbols-outlined">star</span></div>
                <div className="activity-item-info">
                  <p>Received 5-star review from <strong>Sneha D.</strong></p>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{color: 'var(--error)'}}><span className="material-symbols-outlined">warning</span></div>
                <div className="activity-item-info">
                  <p>Need 5 more volunteers for <strong>Chennai Relief</strong></p>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrganizationDashboard;
