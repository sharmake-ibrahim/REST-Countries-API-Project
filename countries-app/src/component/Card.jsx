import React from "react";
// import "../Scss/Card.scss";

function Card({africaCountries}) {
    console.log("card", africaCountries)
//  c
    return(
        <section>
            <div className="img">
                <img src= {africaCountries.flags.png}alt={africaCountries.name.official} />
         
            </div>
            <div className="info">
                <h3 className="name">{africaCountries.name.official}</h3>
                <ul>
                    <li>Population: <small> {africaCountries.population}</small></li>
                    <li>Region: <small>{africaCountries.region}</small></li>
                    <li> Capital: <small> {africaCountries.capital}</small></li>
                </ul>
            </div>
        </section>
    )
}

export default Card;