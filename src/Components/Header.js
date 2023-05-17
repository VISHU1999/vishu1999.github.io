import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Zmage from "react-zmage";


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const proFilePic = "images/" + this.props.data.image
    const name = this.props.data.name;
    const description = this.props.data.description;
    // eslint-disable-next-line
    const config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 5],
      life: [1, 1],
      v: [9, 9],
      tha: [-40, -40],
      // body: "../../public/images/img.jpg", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: {x:750,y:600,width:30,height:90}, // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#ff0000"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };
    // eslint-disable-next-line
    const config2 = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 5],
      life: [1, 1],
      v: [9, 9],
      tha: [40, 40],
      // body: "../../public/images/img.jpg", // Whether to render pictures
      // rotate: [0, 20],
      // alpha: [0.6, 0],
      scale: [1, 0.1],
      position: {x:750,y:600,width:30,height:90}, // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#ff0000"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };

    return (
      <header id="home">
        {/* <ParticlesBg type="custom" config={config} bg={true} />
        <ParticlesBg type="random" config={config2} bg={true} /> */}
        <ParticlesBg type="lines" color="black" num={3000} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
              {/* <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul> */}
              <div>
              <Zmage className="profile-pic" alt="Vivek pic" src={proFilePic} />
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
