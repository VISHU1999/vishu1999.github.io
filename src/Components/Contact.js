import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const city = this.props.data.address.city;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const networks = this.props.data.social.map(function (network) {
      return (
        <h2 key={network.name}>
          <a href={network.url}>
            {network.name} <i className={network.className}></i>
          </a>
        </h2>
      );
    });

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="ten columns">
              <h4 className="lead">{message}</h4>
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
          <div className="columns">
            <h4>Email: viveksharma4318@gmail.com</h4>
            {networks}
        </div>
            
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4> Place and Phone</h4>
                <h2>{phone}</h2> 
                <h2>Place: {city}</h2>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
