import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal/Fade';
import Zmage from 'react-zmage';

const Header = ({ data }) => {
  if (!data) return null;

  const proFilePic = `images/${data.image}`;
  const { name, description } = data;

  // Optimized Batman-themed particle configuration
  const batmanParticlesConfig = {
    num: [25, 50],
    rps: 0.15,
    radius: [8, 22],
    life: [5, 10],
    v: [0.5, 1.5],
    tha: [-30, 30],
    alpha: [0.9, 0],
    scale: [0.5, 1],
    position: "all",
    color: ["#FFD700", "#FFC107", "#FFB300", "#8A6D00"],
    cross: "dead",
    random: 20,
    g: 0,
  
    onParticleUpdate: (ctx, particle) => {
      const { x, y } = particle.p;
      const size = particle.radius;
  
      ctx.save();
  
      ctx.translate(x, y);
  
      ctx.rotate(
        (particle.rotate || 0) * Math.PI / 180
      );
  
      ctx.globalAlpha = particle.alpha;
  
      // Golden glow
      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = size * 1.5;
  
      // Different shades of yellow/gold
      const colors = [
        "#FFD700",
        "#FFC107",
        "#FFB300",
        "#D4AF37"
      ];
  
      ctx.fillStyle =
        colors[Math.floor(Math.random() * colors.length)];
  
      // =========================
      // BAT BODY
      // =========================
  
      ctx.beginPath();
  
      ctx.ellipse(
        0,
        0,
        size * 0.35,
        size * 0.5,
        0,
        0,
        Math.PI * 2
      );
  
      // =========================
      // LEFT WING
      // =========================
  
      ctx.moveTo(
        -size * 0.2,
        -size * 0.1
      );
  
      ctx.bezierCurveTo(
        -size * 0.8,
        -size * 0.7,
        -size * 1.5,
        -size * 0.5,
        -size * 1.6,
        0
      );
  
      ctx.bezierCurveTo(
        -size * 1.2,
        size * 0.15,
        -size * 0.9,
        size * 0.4,
        -size * 0.35,
        size * 0.2
      );
  
      // =========================
      // RIGHT WING
      // =========================
  
      ctx.moveTo(
        size * 0.2,
        -size * 0.1
      );
  
      ctx.bezierCurveTo(
        size * 0.8,
        -size * 0.7,
        size * 1.5,
        -size * 0.5,
        size * 1.6,
        0
      );
  
      ctx.bezierCurveTo(
        size * 1.2,
        size * 0.15,
        size * 0.9,
        size * 0.4,
        size * 0.35,
        size * 0.2
      );
  
      ctx.fill();
  
      // =========================
      // BAT EARS
      // =========================
  
      ctx.beginPath();
  
      // Left ear
      ctx.moveTo(
        -size * 0.25,
        -size * 0.3
      );
  
      ctx.lineTo(
        -size * 0.35,
        -size * 0.9
      );
  
      ctx.lineTo(
        -size * 0.05,
        -size * 0.45
      );
  
      // Right ear
      ctx.moveTo(
        size * 0.25,
        -size * 0.3
      );
  
      ctx.lineTo(
        size * 0.35,
        -size * 0.9
      );
  
      ctx.lineTo(
        size * 0.05,
        -size * 0.45
      );
  
      ctx.fill();
  
      ctx.restore();
    }
  };

  return (
    <header id="home">
      <ParticlesBg type="lines" color="black" num={3000} bg />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">Home</a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">About</a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">Resume</a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">Works</a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom duration={300}>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={400}>
            <h3>{description}.</h3>
          </Fade>
          <div>
            <Zmage className="profile-pic" alt={`${name} pic`} src={proFilePic} />
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
};

export default Header;
