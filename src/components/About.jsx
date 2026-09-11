import React from 'react';
import { Code2, MapPin, BookOpen, Layers } from 'lucide-react';
import resumePDF from '../assets/Resume/Aryan_Resume.pdf';
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
            <h3>Frontend Developer focused on React.js &amp; JavaScript</h3>

            <p>
              I'm a frontend developer focused on building responsive and interactive
              web applications using React.js and JavaScript. I enjoy turning ideas into
              clean, functional interfaces and working with APIs to build real-world applications.
            </p>
            <p>
              I've built projects ranging from e-commerce and weather applications to a
              YouTube-inspired video platform and a full-stack blogging application.
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

            <div className="about-actions">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="View Aryan Karmur's resume (opens in new tab)"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
