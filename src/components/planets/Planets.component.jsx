import React from "react";
import { useQuery } from "react-query";
import { Planet } from "../";
const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  return (
    <div>
      {/* <h2>Planets</h2> */}
      {status === "loading" && <p>loading...</p>}
      {status === "error" && <p>error in fetching data</p>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} {...planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
