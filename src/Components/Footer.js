import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: "yellow",
      padding: "1rem 2rem",
      textAlign: "center",
      fontSize: 16,
      fontFamily: "sans-serif",
      position: "fixed",
      bottom: 0,
      width: "100%",
      zIndex: 1000, // Add a z-index to ensure the footer is above other elements
    }}>
      &copy; 2023 Food Mania. All rights reserved.
    </footer>
  );
};

export default Footer;
