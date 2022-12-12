import React, { useState, useEffect } from "react";
import "./App.css";
import Beers from "./components/Beers";
import LoadingMask from "./components/LoadingMask";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=10")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setBeers(data);
        }, 2000);
      });
  }, []);

  console.log(beers);

  return (
    <div className="App">
      {/* conditional rendering: */}
      {beers.length > 0 ? <Beers /> : <LoadingMask />}
    </div>
  );
}

export default App;
