import React from 'react';
import Fade from 'react-reveal/Fade';

const About = ({ data }) => {
  if (!data) return null;

  const { bio } = data;
  const resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <Fade duration={200} fraction={0.1}>
        <div className="row">
          <div className="twelve columns main-col">
            <h2>About Me</h2>
            <Fade left duration={300}>
              <div className="row banner">
                <h4>{bio.line1}</h4>
                <br />
                <h4>{bio.line2}</h4>
              </div>
            </Fade>

            <div className="download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
