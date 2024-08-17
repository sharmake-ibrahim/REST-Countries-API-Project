
import {useEffect, useState} from "react";
import Card from "./Card";
import { AsyncCompiler } from "sass";

const America = ()=>{ 
    const [america, setAmerica] = useState([])
    const getAmericaData = async ()=> {
        try {
            const url = " https://restcountries.com/v3.1/region/america";
            const res = await fetch(url);
            const data = await res.json();
                setAmerica(data);
            
        }
        catch(error) {
            console.log(error.massage);
        }
    }


    useEffect( ()=> {
        getAmericaData()
    },[]);
    return(
        <main>

            {america.map( (country, index)=> (
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

export default America;