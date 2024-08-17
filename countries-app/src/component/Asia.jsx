import {useEffect, useState} from "react";
import Card from "./Card";

const Asia = ()=>{
    const [asia, setAsia] =useState([])
    const getAsiaData = async ()=> {
        try {
            const url = " https://restcountries.com/v3.1/region/asia";
            const res = await fetch(url);
            const data = await res.json();
                console.log("asia data", data)
                setAsia(data)
        }
        catch(error) {
            console.log(error.massage);
        }
    }

    useEffect( ()=> {
        getAsiaData()
    },[]);
    return(
        <main>

        {asia.map( (country, index)=> (
              <section key={index}>
              <div className="img">
                  <img src= {country.flags.png}alt={country.name.official} />
           
              </div>
              <div className="info">
                  <h3 className="name">{country.name.official}</h3>
                  <ul>
                      <li>Population: <small> {country.population}</small></li>
                      <li>Region: <small>{country.region}</small></li>
                      <li> Capital: <small> {country.capital}</small></li>
                  </ul>
              </div>
          </section>
        ))}

        </main>
    )
}

export default Asia;