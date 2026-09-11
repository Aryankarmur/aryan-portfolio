import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePDF from '../assets/Resume/Aryan_Resume.pdf';
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
            I build responsive and interactive web applications using React.js,
            JavaScript, REST APIs, and modern frontend technologies.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={resumePDF}
              download="Aryan_Karmur_Resume.pdf"
              className="btn btn-outline"
              aria-label="Download Aryan Karmur's resume as PDF"
            >
              <Download size={18} aria-hidden="true" /> Download Resume
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
