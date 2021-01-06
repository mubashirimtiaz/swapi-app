import React from "react";

const Navbar = ({ togglePage }) => {
  const toggleToPlanets = () => {
    togglePage("planets");
  };
  const toggleToPeople = () => {
    togglePage("people");
  };
  return (
    <nav>
      <button onClick={toggleToPlanets}>Planets</button>
      <button onClick={toggleToPeople}>People</button>
    </nav>
  );
};

export default Navbar;
