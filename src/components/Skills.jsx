import React from 'react';
import {
  Layout, Palette, FileJson, Blocks,
  Wind, GitBranch, Server, Smartphone,
  Database, Shield, Zap, Terminal,
  Layers, Package
} from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5', note: 'Semantic markup across all projects', icon: <Layout className="skill-icon" />, color: '#e34c26' },
      { name: 'CSS3', note: 'Custom layouts, responsive design, animations', icon: <Palette className="skill-icon" />, color: '#264de4' },
      { name: 'JavaScript', note: 'Core language for all project logic', icon: <FileJson className="skill-icon" />, color: '#f0db4f' },
      { name: 'React.js', note: 'Used across all projects with hooks and routing', icon: <Blocks className="skill-icon" />, color: '#61dbfb' },
      { name: 'Redux Toolkit', note: 'State management in Mini Mart', icon: <Layers className="skill-icon" />, color: '#764abc' },
      { name: 'Tailwind CSS', note: 'Utility-first styling in select projects', icon: <Wind className="skill-icon" />, color: '#06b6d4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', note: 'Runtime for DevBlog backend server', icon: <Server className="skill-icon" />, color: '#68a063' },
      { name: 'Express.js', note: 'REST API routes and middleware in DevBlog', icon: <Zap className="skill-icon" />, color: '#4caf50' },
      { name: 'REST APIs', note: 'Built and consumed across multiple projects', icon: <Smartphone className="skill-icon" />, color: '#ff7043' },
      { name: 'JWT Authentication', note: 'User auth and protected routes in DevBlog', icon: <Shield className="skill-icon" />, color: '#fbc02d' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', note: 'Users, posts, and comments storage in DevBlog', icon: <Database className="skill-icon" />, color: '#4db33d' },
    ],
  },
  {
    label: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', note: 'Version control for all projects', icon: <GitBranch className="skill-icon" />, color: '#f1502f' },
      { name: 'Axios', note: 'HTTP client for API calls in YWatch, MeghDarshan', icon: <Package className="skill-icon" />, color: '#5a29e4' },
      { name: 'Thunder Client', note: 'API testing during DevBlog development', icon: <Terminal className="skill-icon" />, color: '#e91e63' },
      { name: 'Vite', note: 'Build tool and dev server for all React projects', icon: <Zap className="skill-icon" />, color: '#646cff' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card glass-card"
                  >
                    <div
                      className="icon-container"
                      style={{
                        color: skill.color,
                        borderColor: `${skill.color}40`,
                        background: `${skill.color}15`,
                      }}
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      {skill.note && (
                        <p className="skill-note">{skill.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
