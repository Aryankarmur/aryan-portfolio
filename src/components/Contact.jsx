import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">
          Let's Build <span>Something Together</span>
        </h2>

        <div className="contact-container">
          <div className="contact-info glass-card animate-fade-in">
            <p className="contact-desc">
              I'm currently looking for frontend development opportunities and would
              be happy to connect.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="info-label">Email</h3>
                  <a href="mailto:aryankaramur@gmail.com" aria-label="Send email to aryankaramur@gmail.com">
                    aryankaramur@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <FaLinkedin size={22} />
                </div>
                <div>
                  <h3 className="info-label">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/aryankaramur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Aryan Karmur's LinkedIn profile"
                  >
                    linkedin.com/in/aryankaramur
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <FaGithub size={22} />
                </div>
                <div>
                  <h3 className="info-label">GitHub</h3>
                  <a
                    href="https://github.com/Aryankarmur"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Aryan Karmur's GitHub profile"
                  >
                    github.com/Aryankarmur
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="info-label">Phone</h3>
                  <a href="tel:+916352481426" aria-label="Call +91 6352481426">
                    +91 6352481426
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="info-label">Location</h3>
                  <p>Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
