import React from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

const Portfolio = ({ data }) => {
  if (!data) return null;

  const projects = data.projects.map((project, idx) => {
    const projectImage = `images/portfolio/${project.image}`;

    return (
      <div key={idx} className="portfolio-card">
        <div className="portfolio-img-wrap">
          <Zmage alt={project.title} src={projectImage} />
        </div>

        <div className="portfolio-content">
          <h4 className="portfolio-title">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h4>
          <p className="portfolio-category">{project.category}</p>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade bottom duration={800}>
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
