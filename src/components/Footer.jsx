import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Aryan.dev — go to top">
              <Code2 size={18} className="footer-logo-icon" aria-hidden="true" />
              <span>Aryan<span className="footer-accent">.dev</span></span>
            </a>
            <p>Building clean and user-focused web experiences.</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="footer-links" role="list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/Aryankarmur"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryankaramur/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aryan Karmur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
