import React, { useState } from "react";
import { Navbar, People, Planets } from "./components";

const App = () => {
  const [page, setPage] = useState("planets");
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar togglePage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
};

export default App;
