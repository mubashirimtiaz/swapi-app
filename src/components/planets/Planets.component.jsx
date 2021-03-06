import React, { useState } from "react";
import { useQuery } from "react-query";
import { Planet } from "../";
const fetchPlanets = async ({ queryKey }) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${queryKey[1]}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(
    localStorage.getItem("planetPage")
      ? Number(localStorage.getItem("planetPage"))
      : 1
  );
  const { data, status } = useQuery(["planets", page], fetchPlanets, {
    // staleTime: 2000,
    // cacheTime: 1000,
    // keepPreviousData: true,
    onSuccess: () => localStorage.setItem("planetPage", page),
  });

  return (
    <div>
      <h2>Planets</h2>
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
            {data.results.map((planet) => (
              <Planet key={planet.name} {...planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
