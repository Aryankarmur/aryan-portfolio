import React from 'react';
import { Layout, Palette, FileJson, Blocks, Frame, Wind, GitBranch, Server, Smartphone } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillList = [
    { name: 'HTML5', icon: <Layout className="skill-icon" />, level: 90, color: '#e34c26' },
    { name: 'CSS3', icon: <Palette className="skill-icon" />, level: 85, color: '#264de4' },
    { name: 'JavaScript', icon: <FileJson className="skill-icon" />, level: 80, color: '#f0db4f' },
    { name: 'React', icon: <Blocks className="skill-icon" />, level: 85, color: '#61dbfb' },
    { name: 'Bootstrap', icon: <Frame className="skill-icon" />, level: 75, color: '#7952b3' },
    { name: 'Tailwind CSS', icon: <Wind className="skill-icon" />, level: 80, color: '#06b6d4' },
    { name: 'Git & GitHub', icon: <GitBranch className="skill-icon" />, level: 75, color: '#f1502f' },
    { name: 'REST APIs', icon: <Server className="skill-icon" />, level: 80, color: '#4caf50' },
    { name: 'Responsive Design', icon: <Smartphone className="skill-icon" />, level: 90, color: '#e91e63' },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="icon-container"
                style={{ color: skill.color, borderColor: `${skill.color}40`, background: `${skill.color}15` }}
              >
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
