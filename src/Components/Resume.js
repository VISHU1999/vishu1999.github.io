import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import SkillBar from './SkillBar';
import './Skills.css';

const Resume = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  if (!data) return null;

  const { skillmessage } = data;

  const education = data.education.map((edu) => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className="info">
        {edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em>
      </p>
      <p>{edu.description}</p>
    </div>
  ));

  const certifications = data.certifications.map((item) => (
    <div className="certificate" key={item.name}>
      <h4>
        <a href={item.url}> {item.name} </a>
      </h4>
    </div>
  ));

  const work = data.work.map((w) => (
    <div key={w.company}>
      <h3>{w.company}</h3>
      {w && w.positions && w.positions.map((position) => (
        <div key={position.title}>
          <p className="info">
            <span className="position-title">{position.title}</span>
            <span>&bull;</span> <em className="date">{position.years}</em>
          </p>
          <p>{position.description}</p>
        </div>
      ))}
    </div>
  ));

  // Group skills by category
  const skillsByCategory = data.skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Get unique categories
  const categories = ['All', ...Object.keys(skillsByCategory)];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All' 
    ? data.skills 
    : skillsByCategory[activeCategory] || [];

  // Category colors
  const categoryColors = {
    'Backend': '#4f46e5',
    'Frontend': '#06b6d4',
    'Database': '#10b981',
    'Distributed Systems': '#f59e0b',
    'DevOps': '#8b5cf6',
    'Architecture': '#ec4899',
    'AI/ML': '#ef4444',
    'Quality Assurance': '#14b8a6',
    'Other': '#6366f1'
  };

  const getSkillColor = (category) => {
    return categoryColors[category] || '#6366f1';
  };

  const skills = filteredSkills.map((skill, index) => {
    const color = getSkillColor(skill.category);
    return (
      <SkillBar 
        key={skill.name} 
        skill={skill} 
        index={index} 
        color={color} 
      />
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>
          <div className="nine columns main-col">{certifications}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p className="skill-message">{skillmessage}</p>
            
            {/* Category Filter Pills */}
            <div className="skill-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    backgroundColor: activeCategory === category ? getSkillColor(category) : 'transparent',
                    borderColor: getSkillColor(category),
                    color: activeCategory === category ? '#fff' : getSkillColor(category)
                  }}
                >
                  {category}
                  <span className="pill-count">
                    {category === 'All' ? data.skills.length : (skillsByCategory[category] || []).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="skills-modern-grid">
              {skills}
            </div>

            {/* Skills Summary Stats */}
            <div className="skills-stats">
              <div className="stat-card">
                <div className="stat-number">{data.skills.length}</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{Object.keys(skillsByCategory).length}</div>
                <div className="stat-label">Categories</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {Math.round(data.skills.reduce((sum, s) => sum + parseInt(s.level), 0) / data.skills.length)}%
                </div>
                <div className="stat-label">Avg Proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
