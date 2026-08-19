import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-title">
            Aryan <span className="highlight">Karmur</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            I build modern, attractive, and eye-catching web applications. Passionate about creating seamless user experiences using the latest web technologies.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Aryankarmur" className="social-icon" target='_blank'><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/aryankaramur/" className="social-icon" target='_blank'><FaLinkedin size={24} /></a>
            <a href="mailto:aryankaramur@gmail.com" className="social-icon"><Mail size={24} /></a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="hero-image-container">
            <div className="hero-image-blob"></div>
            {/* Placeholder for actual image */}
            <div className="hero-image-placeholder">
               <span className="text-6xl font-bold text-indigo-500">AK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
