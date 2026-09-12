import React from 'react';
import { ExternalLink, ShoppingCart, CloudSun, BookText } from 'lucide-react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'DevBlog',
    subtitle: 'Full-Stack Blog Application',
    description:
      'A blogging platform where users can sign up, write posts, and leave comments. I built the backend from scratch with Express.js and MongoDB, added JWT-based authentication with protected routes, and connected it to a React frontend with full CRUD operations.',
    icon: <BookText size={44} />,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/Aryankarmur/blog-app',
    liveLink: 'https://devblo.netlify.app',
    colorKey: 'violet',
    featured: true,
  },
  {
    title: 'YWatch',
    subtitle: 'YouTube-Inspired Video Platform',
    description:
      'A video browsing app that pulls data from the YouTube Data API. Users can search for videos, browse by category, and watch videos with a custom player layout. Built with React Router for multi-page navigation.',
    icon: <FaYoutube size={44} />,
    tags: ['React.js', 'REST APIs', 'React Router', 'CSS3'],
    githubLink: 'https://github.com/Aryankarmur/YouTube-clone',
    liveLink: 'https://ywatch-aryan.netlify.app',
    colorKey: 'emerald',
  },
  {
    title: 'Mini Mart',
    subtitle: 'React E-Commerce Application',
    description:
      'An e-commerce store with product listing, individual product pages, and a shopping cart that persists across sessions. Uses React Context API for global state management.',
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
      'A weather app that fetches real-time weather data based on city search. Displays current conditions, temperature, humidity, and wind speed with a clean UI that adapts to weather conditions.',
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
              className={`project-card glass-card project-card--${project.colorKey} ${project.featured ? 'project-card--featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`project-image project-image--${project.colorKey}`} aria-hidden="true">
                {project.featured && (
                  <span className="featured-badge">Featured Project</span>
                )}
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
