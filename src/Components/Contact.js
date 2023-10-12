import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const { city } = this.props.data.address;
    const { phone } = this.props.data;
    const message = this.props.data.contactmessage;
    const networks = this.props.data.social.map((network) => (
      <h4 key={network.name}>
        <a href={network.url}>
          {network.name}
          {' '}
          <i className={network.className} />
        </a>
      </h4>
    ));

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="ten columns">
              <h4 className="lead">{message}</h4>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="columns">
              <h4>viveksharma4318@gmail.com</h4>
                <h4>{phone}</h4>
                <h4>{city}</h4>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact network">
              {networks}
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
