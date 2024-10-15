import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="header">
        <div className="profile-photo">
          <img src="/images/person.png" alt="Samuel Anderson" />
        </div>

        <div className="profile-info">
          <h1>SAMUEL ANDERSON</h1>
          <p>
            <span className="experience-box">THE EXPERIENCED UI/UX DESIGNER</span>
          </p>

          {/* Menu Section Inside Profile Info */}
          <div className="menu">
            <div className="menu-item">
              <img src="/images/home.png" alt="Home Icon" className="menu-icon" />
              Home
            </div>
            <div className="menu-item">
              <img src="/images/resume.png" alt="Resume Icon" className="menu-icon" />
              Resume
            </div>
            <div className="menu-item">
              <img src="/images/portfolio.png" alt="Portfolio Icon" className="menu-icon" />
              Portfolio
            </div>
            <div className="menu-item">
              <img src="/images/contact.png" alt="Contacts Icon" className="menu-icon" />
              Contacts
            </div>
            <div className="menu-item">
              <img src="/images/feedback.png" alt="Feedback Icon" className="menu-icon" />
              Feedback
            </div>
            <div className="menu-item">
              <img src="/images/blog.png" alt="Blog Icon" className="menu-icon" />
              Blog
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <button className="upload-button">
          <img src="/images/upload.png" alt="Upload" className="upload-icon" />
        </button>
      
      <button className="be-button">
          <img src="/images/be.png" alt="Be" className="be-icon" />
        </button>
      </div>
      {/* Main Content Section */}
      <div className="content">
        <div className="info-section">
          <h2>GRIDUS RESUME HTML TEMPLATE</h2>
          <p className="description">PERFECT FOR CV / RESUME OR PORTFOLIO WEBSITE</p>

          {/* Grouping Feature Items */}
          <div className="feature-group">
            <div className="feature">
              <img src="/images/pic1.png" alt="Modern" className="feature-icon" />
              <div className="feature-text">
                <h3>MODERN</h3>
                <p className="feature-description">The Gridus Resume Template has a unique modern and interactive design. You can choose one of 8 color schemes.</p>
              </div>
            </div>

            <div className="feature">
              <img src="/images/pic2.png" alt="Simple CV" className="feature-icon" />
              <div className="feature-text">
                <h3>SIMPLE CV</h3>
                <p className="feature-description">Gridus Resume Template is the simple, clean and stylish fully responsive resume theme with modern creative design.</p>
              </div>
            </div>

            <div className="feature">
              <img src="/images/pic3.png" alt="Responsive" className="feature-icon" />
              <div className="feature-text">
                <h3>RESPONSIVE</h3>
                <p className="feature-description">Works fast and looks fine on any device with any screen size, with the usage of SEO versions and supports all the Google SEO rules.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="personal-info">
          <h2>PERSONAL INFO</h2>
          <div className="info-row">
            <strong>NAME:</strong>
            <span>Samuel T. Anderson</span>
          </div>
          <div className="info-row">
            <strong>BIRTH DATE:</strong>
            <span>03/21/1980</span>
          </div>
          <div className="info-row">
            <strong>ADDRESS:</strong>
            <span>1524, Direct street, Daytona Beach, <br />FL, USA</span>
          </div>
          <div className="info-row">
            <strong>PHONE:</strong>
            <span>+1 234 567 89 00</span>
          </div>
          <div className="info-row">
            <strong>EMAIL:</strong>
            <span>jamesanderson@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
