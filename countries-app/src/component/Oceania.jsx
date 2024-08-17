
import {useEffect, useState} from "react";


const Oceania = ()=>{ 
    const [oceania, setOceania] = useState([])
    const getOceaniaData = async ()=> {
        try {
            const url = " https://restcountries.com/v3.1/region/oceania";
            const res = await fetch(url);
            const data = await res.json();
                setOceania(data);
            
        }
        catch(error) {
            console.log(error.massage);
        }
    }


    useEffect( ()=> {
        getOceaniaData()
    },[]);
    return(
        <main>

            {oceania.map( (country, index)=> (
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

export default Oceania;