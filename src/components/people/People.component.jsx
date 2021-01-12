import React, { useState } from "react";
import { useQuery } from "react-query";
import { Person } from "../";
const fetchPeople = async ({ queryKey }) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${queryKey[1]}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["people", page], fetchPeople, {
    staleTime: Infinity,
  });
  return (
    <div>
      <h2>People</h2>
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
