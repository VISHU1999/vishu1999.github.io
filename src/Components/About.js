import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const bio = this.props.data.bio;
    const resumeDownload = this.props.data.resumedownload;

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
            </div>
            <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
