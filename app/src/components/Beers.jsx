import Beer from "./Beer";

function Beers({beers}) {
    

    return (
        <div className="beers">
            {beers               
                .map((beer, index) => (
                    <Beer key={index} beerData={beer} />
                ))}
        </div>
    );
}

export default Beers;
