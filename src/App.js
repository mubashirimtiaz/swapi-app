import React, { useEffect, useState } from "react";
import { Navbar, People, Planets } from "./components";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const [tab, setTab] = useState(
    localStorage.getItem("tab") ? localStorage.getItem("tab") : "planets"
  );
  useEffect(() => {
    localStorage.setItem("tab", tab);
  }, [tab]);
  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar togglePage={setTab} />
        <div className="content">
          {tab === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
