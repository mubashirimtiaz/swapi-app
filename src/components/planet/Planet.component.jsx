import React from "react";

const Planet = ({ name, population, terrain }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};

export default Planet;
