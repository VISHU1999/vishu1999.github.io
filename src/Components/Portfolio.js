import React, { useState } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal/Fade';
import './Portfolio.css';

const Portfolio = ({ data }) => {
  const [imageErrors, setImageErrors] = useState({});
  
  if (!data) return null;

  // Generate creative gradient backgrounds based on category
  const getPlaceholderStyle = (category, title) => {
    const gradients = {
      'AI/LLM Application': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Healthcare AI Solution': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Social Media Analytics': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'Enterprise SaaS Platform': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'Backend Architecture': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'API Development': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'Full Stack Application': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };

    return {
      background: gradients[category] || gradients.default,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '250px',
      color: 'white',
      fontSize: '48px',
      fontWeight: '700',
      fontFamily: 'Chakra Petch, sans-serif',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden'
    };
  };

  // Generate abstract pattern overlay
  const getPatternOverlay = (index) => {
    const patterns = [
      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%)',
      'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
      'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.1), transparent)',
    ];
    return patterns[index % patterns.length];
  };

  const handleImageError = (idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
  };

  const projects = data.projects.map((project, idx) => {
    const projectImage = `images/portfolio/${project.image}`;
    const hasError = imageErrors[idx];
    const firstLetter = project.title.charAt(0).toUpperCase();

    return (
      <div key={idx} className="portfolio-card">
        <div className="portfolio-img-wrap">
          {hasError ? (
            <div 
              className="portfolio-placeholder"
              style={getPlaceholderStyle(project.category, project.title)}
            >
              <div 
                className="placeholder-pattern"
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  background: getPatternOverlay(idx),
                  opacity: 0.5
                }}
              />
              <div className="placeholder-content">
                <div className="placeholder-icon">{firstLetter}</div>
                <div className="placeholder-code">{'</>'.repeat(3)}</div>
              </div>
            </div>
          ) : (
            <Zmage 
              alt={project.title} 
              src={projectImage}
              onError={() => handleImageError(idx)}
            />
          )}
        </div>

        <div className="portfolio-content">
          <h4 className="portfolio-title">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h4>
          <p className="portfolio-category">{project.category}</p>
          
          {project.description && (
            <p className="portfolio-description">{project.description}</p>
          )}
          
          {project.techStack && (
            <div className="portfolio-tech-stack">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tech-badge">+{project.techStack.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade bottom duration={300}>
        <div className="portfolio-container">
          <h1 className="portfolio-header">Check Out Some of My Works</h1>
          <div className="portfolio-grid">
            {projects}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
