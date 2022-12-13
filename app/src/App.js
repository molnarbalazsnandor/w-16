import React, { useState, useEffect } from "react";
import "./App.css";
import Beers from "./components/Beers";
import LoadingMask from "./components/LoadingMask";

function App() {
  const [beers, setBeers] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setBeers(data);
        }, 2000);
      });
  }, [perPage]);

  /* Chrome-ban működő megoldás 
  useEffect(() => {
    sortBy === "asc"
      ? setBeers([...beers].sort((a, b) => (a.name > b.name ? -1 : 1)))
      : setBeers([...beers].sort((a, b) => (a.name < b.name ? -1 : 1)));
  }, [sortBy]);

     Firefox-ban működő megoldás:

useEffect(() => {
    sortBy === "asc"
      ? setBeers((beers) => beers.sort((a, b) => a.name > b.name))
      : setBeers((beers) => beers.sort((a, b) => a.name < b.name));
  }, [sortBy]); */

  useEffect(() => {
    sortBy === "asc"
      ? setBeers([...beers].sort((a, b) => (a.name > b.name ? 1 : -1)))
      : setBeers([...beers].sort((a, b) => (a.name < b.name ? 1 : -1)));
  }, [sortBy]);

  console.log(beers);

  return (
    <div className="App">
      <input
        type="number"
        value={perPage}
        onChange={(event) => {
          setPerPage(event.target.value);
        }}
      />

      <p>filter:</p>
      <input
        type="text"
        placeholder="filter"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />

      <button
        onClick={() => {
          sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
        }}
      >
        Sorted by: {sortBy}
      </button>

      {/* conditional rendering: */}
      {beers.length > 0 ? (
        <Beers beers={beers} filter={filter} />
      ) : (
        <LoadingMask />
      )}
    </div>
  );
}

export default App;
