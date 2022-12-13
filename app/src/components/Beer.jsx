import React from "react";

function Beer({ beerData }) {
    return (
        <div>
            <p className="beer-name">{beerData.name}</p>
            <p className="beer-tagline">{beerData.tagline}</p>
            <p>{beerData.abv} %</p>   
        </div>
    );
}

export default Beer;
