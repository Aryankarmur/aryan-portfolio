import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">

        <div className="hero-content animate-fade-in">
          <div className="hero-role-badge" aria-label="Role">
            Frontend Developer &nbsp;|&nbsp; React.js &amp; JavaScript
          </div>

          <h1 className="hero-title">
            Aryan <span className="highlight">Karmur</span>
          </h1>

          <p className="hero-description">
            I build responsive web applications with React.js and JavaScript.
            I also have hands-on experience building REST APIs with Node.js,
            Express, and MongoDB through full-stack projects.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Aryankarmur"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryankaramur/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:aryankaramur@gmail.com"
              className="social-icon"
              aria-label="Send email to Aryan Karmur"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="hero-image-wrapper animate-fade-in"
          style={{ animationDelay: '0.2s' }}
          aria-hidden="true"
        >
          <div className="hero-image-container">
            <div className="hero-image-blob"></div>
            <div className="hero-image-placeholder">
              <span>AK</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
