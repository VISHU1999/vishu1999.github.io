import React from 'react';
import Slide from 'react-reveal';

const Resume = ({ data }) => {
  if (!data) return null;

  const getRandomColor = () => {
    // const hue = Math.floor(Math.random() * 360);
    // return `hsl(${hue}, 90%, 60%)`;   // pastel-ish
    return '#00000'
  };

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

  const skills = data.skills.map((skill) => {
    const backgroundColor = getRandomColor();
    const className = `bar-expand ${skill.name.toLowerCase()}`;
    const width = skill.level; // expecting e.g. '90%'

    return (
      <li key={skill.name}>
        <span style={{ width, backgroundColor }} className={className} />
        <em>{skill.name}</em>
      </li>
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
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
