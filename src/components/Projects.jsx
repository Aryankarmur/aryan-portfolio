import React from 'react';
import { ExternalLink, ShoppingCart, CloudSun } from 'lucide-react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Mini-Mart (E-Commerce Platform)',
      description: 'A full-featured e-commerce platform built with React. Includes product browsing, shopping cart functionality, and simulated checkout process.',
      imageIcon: <ShoppingCart size={48} className="text-indigo-400" />,
      tags: ['React.js', 'CSS3', 'Context API'],
      githubLink: 'https://github.com/Aryankarmur/mini_mart',
      liveLink: 'https://mini-mart-bajar.netlify.app',
      color: 'indigo'
    },
    {
      title: 'MeghDarshan (Dynamic Weather Application)',
      description: 'A dynamic weather application that provides real-time weather forecasts based on user location or city search using external APIs.',
      imageIcon: <CloudSun size={48} className="text-cyan-400" />,
      tags: ['React.js', 'REST APIs', 'CSS3'],
      githubLink: 'https://github.com/Aryankarmur/meghadarshan',
      liveLink: 'https://meghadarshan.netlify.app',
      color: 'cyan'
    },
    {
      title: 'YWatch (Video Streaming Platform)',
      description: 'A clone of the YouTube website built with React. Features include video browsing, search functionality, and video playback.',
      imageIcon: <FaYoutube size={48} className="text-emerald-400" />,
      tags: ['React.js', 'REST APIs', 'CSS3', 'React Router'],
      githubLink: 'https://github.com/Aryankarmur/YouTube-clone',
      liveLink: 'https://ywatch-aryan.netlify.app',
      color: 'emerald'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`project-image bg-${project.color}`}>
                {project.imageIcon}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubLink} className="project-link" aria-label="GitHub Repository" target='_blank'>
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.liveLink} className="project-link" aria-label="Live Demo" target='_blank'>
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
