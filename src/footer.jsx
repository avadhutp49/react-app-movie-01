// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>
        Connect on &nbsp;
        <a href="https://www.linkedin.com/in/avadhutp49/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn
        </a>{" | "}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#4444',
  color: 'white', // Change this color to your desired text color
  padding: '1rem',
  textAlign: 'center',
  width: '100%',
};

const linkStyle = {
  color: 'white', // Change this color to your desired hyperlink color
  textDecoration: 'none', // Optional: Remove underline from the hyperlink
};

export default Footer;
