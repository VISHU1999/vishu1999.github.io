import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ skill, index, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 30);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={barRef}
      className="skill-item" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--skill-color': color 
      }}
    >
      <div className="skill-header">
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          {skill.yearsOfExperience && (
            <span className="skill-experience">{skill.yearsOfExperience} experience</span>
          )}
        </div>
        <span className="skill-level">{skill.level}</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar-fill" 
          style={{ 
            width: isVisible ? skill.level : '0%',
            backgroundColor: color,
            transition: `width 1.5s ease-out ${index * 0.1}s`
          }}
        />
        <div className="skill-bar-glow" style={{ backgroundColor: color }} />
      </div>
      {skill.category && (
        <span className="skill-category-badge" style={{ 
          backgroundColor: `${color}20`, 
          color: color 
        }}>
          {skill.category}
        </span>
      )}
    </div>
  );
};

export default SkillBar;
