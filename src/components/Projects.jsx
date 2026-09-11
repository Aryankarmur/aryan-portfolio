import React from 'react';
import { ExternalLink, ShoppingCart, CloudSun, BookText } from 'lucide-react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'YWatch',
    subtitle: 'YouTube-Inspired Video Platform',
    description:
      'YouTube-inspired React application with video browsing, search, API integration, routing, responsive layouts, and video playback.',
    icon: <FaYoutube size={44} />,
    tags: ['React.js', 'REST APIs', 'React Router', 'CSS3'],
    githubLink: 'https://github.com/Aryankarmur/YouTube-clone',
    liveLink: 'https://ywatch-aryan.netlify.app',
    colorKey: 'emerald',
  },
  {
    title: 'DevBlog',
    subtitle: 'Full-Stack Blog Application',
    description:
      'Full-stack blogging application with React, Express.js, MongoDB, JWT authentication, protected routes, and CRUD operations.',
    icon: <BookText size={44} />,
    tags: ['React.js', 'Express.js', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/Aryankarmur/devblog',
    liveLink: 'https://github.com/Aryankarmur/devblog',
    liveIsGitHub: true,
    colorKey: 'violet',
  },
  {
    title: 'Mini Mart',
    subtitle: 'React E-Commerce Application',
    description:
      'React e-commerce application with product browsing, dynamic product details, cart management, and persistent cart state.',
    icon: <ShoppingCart size={44} />,
    tags: ['React.js', 'Context API', 'CSS3'],
    githubLink: 'https://github.com/Aryankarmur/mini_mart',
    liveLink: 'https://mini-mart-bajar.netlify.app',
    colorKey: 'indigo',
  },
  {
    title: 'MeghDarshan',
    subtitle: 'Weather Forecast Application',
    description:
      'React weather application using a weather API for location-based weather data, forecasts, and dynamic weather conditions.',
    icon: <CloudSun size={44} />,
    tags: ['React.js', 'REST APIs', 'CSS3'],
    githubLink: 'https://github.com/Aryankarmur/meghadarshan',
    liveLink: 'https://meghadarshan.netlify.app',
    colorKey: 'cyan',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          Selected <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card glass-card project-card--${project.colorKey}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`project-image project-image--${project.colorKey}`} aria-hidden="true">
                {project.icon}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    className="project-link"
                    aria-label={`View ${project.title} source code on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={17} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    className={`project-link ${project.liveIsGitHub ? 'project-link--repo' : 'project-link--live'}`}
                    aria-label={project.liveIsGitHub ? `View ${project.title} repository` : `View ${project.title} live demo`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    <span>{project.liveIsGitHub ? 'View Repo' : 'Live Demo'}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
