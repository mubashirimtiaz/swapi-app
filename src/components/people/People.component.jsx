import React from "react";
import { useQuery } from "react-query";
import { Person } from "../";
const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople, {
    staleTime: Infinity,
  });
  return (
    <div>
      {/* <h2>Planets</h2> */}
      {status === "loading" && <p>loading...</p>}
      {status === "error" && <p>error in fetching data</p>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} {...person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
