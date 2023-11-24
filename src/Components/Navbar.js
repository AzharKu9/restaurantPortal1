import React from 'react'

const Navbar = () => {
  return (
    <navbar style={{
      background: "#FEC013",
      padding: "1rem 2rem",
      fontSize: 24,
      fontFamily: "sans-serif",
      position: "fixed",
      top:0,
      width: "100%",
      zIndex: 1000, // Add a z-index to ensure the footer is above other elements
      opacity:1,
      color:"black"
    }}> 
    Food Mania
    </navbar>
  )
}

export default Navbar