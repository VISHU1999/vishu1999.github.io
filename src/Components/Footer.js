import React, { Component } from 'react';
import Fade from 'react-reveal';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="copyright">
                <h4>
                  "Believe in trust, for it is one of the most valuable assets in the world"
                </h4>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
