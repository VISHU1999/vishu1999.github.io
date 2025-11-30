import React from 'react';
import Fade from 'react-reveal';

const Footer = ({ data }) => {
  if (!data) return null;

  return (
    <footer style={{ padding: "30px 0", borderTop: "1px solid #444" }}>
      <Fade bottom>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ 
            fontWeight: 300,
            marginBottom: "15px",
            fontStyle: "italic"
          }}>
            "Believe in trust, for it is one of the most valuable assets in the world"
          </h4>

          <a className="smoothscroll" href="#home">
            <i style={{ fontSize: "26px" }} className="icon-up-open" />
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
