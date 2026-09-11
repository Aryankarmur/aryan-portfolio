import React from 'react';
import {
  Layout, Palette, FileJson, Blocks,
  Wind, GitBranch, Server, Smartphone,
  Route, Database, Layers
} from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    label: 'Core Frontend',
    skills: [
      { name: 'HTML5', icon: <Layout className="skill-icon" />, color: '#e34c26' },
      { name: 'CSS3', icon: <Palette className="skill-icon" />, color: '#264de4' },
      { name: 'JavaScript', icon: <FileJson className="skill-icon" />, color: '#f0db4f' },
      { name: 'React.js', icon: <Blocks className="skill-icon" />, color: '#61dbfb' },
    ],
  },
  {
    label: 'Libraries & Tools',
    skills: [
      { name: 'React Router', icon: <Route className="skill-icon" />, color: '#ca4245' },
      { name: 'Redux Toolkit', icon: <Database className="skill-icon" />, color: '#764abc' },
      { name: 'Axios', icon: <Server className="skill-icon" />, color: '#5a29e4' },
      { name: 'Tailwind CSS', icon: <Wind className="skill-icon" />, color: '#06b6d4' },
      { name: 'Bootstrap', icon: <Layers className="skill-icon" />, color: '#7952b3' },
    ],
  },
  {
    label: 'Development',
    skills: [
      { name: 'REST APIs', icon: <Server className="skill-icon" />, color: '#4caf50' },
      { name: 'Git & GitHub', icon: <GitBranch className="skill-icon" />, color: '#f1502f' },
      { name: 'Responsive Design', icon: <Smartphone className="skill-icon" />, color: '#e91e63' },
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
                    <h4>{skill.name}</h4>
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
