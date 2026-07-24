import React from 'react';
import Fade from 'react-reveal';

const About = ({ data }) => {
  if (!data) return null;

  const { bio } = data;
  const resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="two columns">
          <div className="columns main-col">
            <h2>About Me</h2>
            <Fade left duration={1000}>
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

        <div className="columns sidebar">
          <h2>New Blog Post</h2>
          <p>
            Check out my latest blog on  
            <span> Facebook page comments watcher using Autonomous Agent</span>
          </p>
          <a
            className="m-story blog"
            href="https://medium.com/@viveksharma4318/facebook-page-comments-watcher-using-autonomous-agent-aa89f12f5510"
          >
            Creating an AI-based Facebook Comment Moderator using Fetch.ai’s uAgents
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default About;
