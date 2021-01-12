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
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((old) => (!data || !data.next ? old : old + 1))
            }
            disabled={!data.next}
          >
            Next
          </button>
          <div>
            {data.results.map((person) => (
              <Person key={person.name} {...person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
