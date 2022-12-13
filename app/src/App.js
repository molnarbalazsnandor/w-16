import React, { useState, useEffect } from "react";
import "./App.css";
import Beers from "./components/Beers";
import LoadingMask from "./components/LoadingMask";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  console.log(beers);

  return <div className="App"></div>;
}

export default App;
