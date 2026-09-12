import React from 'react';
import { Code2, MapPin, BookOpen, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <div className="about-text glass-card animate-fade-in">
            <h3>Frontend Developer with practical full-stack experience</h3>

            <p>
              I'm a BCA graduate focused on frontend development with React.js
              and JavaScript. I enjoy building clean interfaces and working with
              APIs to create functional web applications.
            </p>
            <p>
              Beyond the frontend, I've built a full-stack blogging platform
              (DevBlog) using Node.js, Express, and MongoDB — handling everything
              from REST API design and JWT authentication to database modeling.
              I'm interested in continuing to grow toward broader full-stack
              development.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <Code2 className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label">Role</span>
                  <span className="detail-value">Frontend Developer</span>
                </div>
              </div>

              <div className="detail-item">
                <Layers className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label">Focus</span>
                  <span className="detail-value">React.js &amp; JavaScript</span>
                </div>
              </div>

              <div className="detail-item">
                <BookOpen className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-value">BCA</span>
                </div>
              </div>

              <div className="detail-item">
                <MapPin className="detail-icon" aria-hidden="true" />
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Gujarat, India</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
