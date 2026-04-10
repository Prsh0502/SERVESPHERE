import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import myVideo from '../../assets/hero-video.mp4';
const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">ServeSphere</div>
          <div className="navbar-links">
            <Link to="/explore" className="nav-link active">Explore</Link>
            <Link to="#" className="nav-link">About</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/login"><button className="nav-btn">Start Impacting</button></Link>
          </div>
          {/* Mobile Toggle */}
          <div className="mobile-toggle">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Cinematic Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-headline">
                Where Compassion Meets <span className="highlight-italic">Action.</span> Building a Stronger India.
              </h1>
              <p className="hero-subheadline">
                Empowering communities through seamless connection and meaningful action. Join the movement that redefines social service.
              </p>
              <div className="hero-actions">
                <Link to="/explore"><button className="btn-primary-gradient">Start Volunteering</button></Link>
                <Link to="/login"><button className="btn-secondary">For Organizations</button></Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-glow-1"></div>
              <div className="hero-image-wrapper" style={{ minHeight: '500px', display: 'flex' }}>
                <video
                  className="hero-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={myVideo}
                  style={{ objectFit: 'cover', width: '100%', minHeight: '500px' }}
                />
              </div>
              <div className="hero-glow-2"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1.2M</div>
              <div className="stat-label">Impact Hours</div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2 className="section-title">Designed for Purpose</h2>
              <p className="section-subtitle">Elevating the experience of giving back through editorial-grade technology.</p>
            </div>

            <div className="features-grid">
              {/* Card 1 */}
              <div className="feature-card glass-card border-brown">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined text-primary">app_registration</span>
                </div>
                <h3>Seamless Enrollment</h3>
                <p>Frictionless sign-ups that respect your time. Join causes with a single click and manage your schedule effortlessly.</p>
              </div>

              {/* Card 2 */}
              <div className="feature-card glass-card border-brown">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                </div>
                <h3>Impact Tracking</h3>
                <p>Visualize your contribution. Detailed reporting on hours, specific impacts made, and community growth metrics.</p>
              </div>

              {/* Card 3 */}
              <div className="feature-card glass-card border-brown">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <h3>Community Verified</h3>
                <p>Every organization and event is vetted to ensure safety, authenticity, and maximum community impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works: Asymmetric Flow */}
        <section className="journey-section">
          <div className="journey-container">
            <div className="journey-header">
              <h2 className="section-title">How ServeSphere Connects You</h2>
              <span className="journey-badge">The Journey</span>
            </div>

            <div className="journey-flow">
              <div className="journey-line"></div>
              <div className="journey-steps">
                {/* Step 1 */}
                <div className="journey-step">
                  <div className="step-number">01</div>
                  <h3>Register</h3>
                  <p>Create your profile with interests and skills. Let the platform understand how you want to contribute.</p>
                </div>
                {/* Step 2 */}
                <div className="journey-step step-offset">
                  <div className="step-number">02</div>
                  <h3>Discover</h3>
                  <p>Explore a curated editorial feed of local opportunities. Smart recommendations match your heart to a cause.</p>
                </div>
                {/* Step 3 */}
                <div className="journey-step">
                  <div className="step-number">03</div>
                  <h3>Connect</h3>
                  <p>Start your first task. Meet your community, track your hours, and witness the tangible change you create.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Component: Impact Card */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonial-visual">
              <img
                alt="Community Impact"
                className="testimonial-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuDxIcd3jT2-0L8Zw0duXTQsO8kcofKIF9b4w6Co5qpSR16gJU_XN8f8nUNQSQefMAJOIMJbQgyCG6ULq7adY5BeRNxtpXQppW53kHzIvqpUOBZkr0Hoh4kvuGqiWYfASYL0D2HieJBWKrAv1ak7vCEw3dJVOH8d12aV9V6FMg_z-sxQwAcqDKENgu_47paJuB6BMEZQ4uzxaBi8krEQkSvGfMKZwOqhjoUxjrY4gKhBRC0pMnz9D4-fSL9A_sVwRV7BaVOOycp9b-"
              />
              {/* Glassmorphic Impact Card */}
              <div className="impact-card">
                <div className="impact-header">
                  <div className="impact-icon">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                  </div>
                  <span className="impact-title">Live Feedback</span>
                </div>
                <p className="impact-quote">"The transparency on ServeSphere helped us increase volunteer retention by 40% in just three months."</p>
                <div className="impact-author">— Sankalp India Foundation</div>
              </div>
            </div>

            <div className="testimonial-content">
              <h2 className="section-title">Testimonials from the Heart of the Service</h2>
              <div className="quotes-list">
                <blockquote className="quote-item">
                  <p>"Finally, a tool that treats non-profit work with the same polish as a Fortune 500 company. It makes recruiting feel professional and easy."</p>
                  <cite>— Sneha Desai, Community Garden Director</cite>
                </blockquote>
                <blockquote className="quote-item">
                  <p>"I found my passion for youth mentoring through ServeSphere's recommendation engine. It's transformed how I spend my weekends."</p>
                  <cite>— Rahul Verma, Volunteer</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-card">
              <div className="cta-gradient-bg"></div>
              <h2 className="cta-title">Ready to change the world?</h2>
              <p className="cta-subtitle">Join 10,000+ others who are building stronger, more resilient communities every single day.</p>
              <div className="cta-action">
                <Link to="/login"><button className="btn-cta">Create Your Free Account</button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">ServeSphere</div>
            <p className="footer-desc">© 2026 ServeSphere. Impacting communities with editorial precision. Built for humans, by humans.</p>
          </div>
          <div className="footer-links">
            <a href="#">Impact Reports</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;