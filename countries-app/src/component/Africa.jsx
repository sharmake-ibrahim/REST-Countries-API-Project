import { useContext} from "react";
import { Link } from "react-router-dom";

import DataContext from "../Data/Data";
const Africa = ()=> {
        
        const africa = useContext(DataContext);

        console.log(africa);
   
    return(
        <main>

            
            {africa.map( (country,index )=> (
                <Link to={`/africa/${country.area}`} key={index} >
                           <section>
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

             </Link>
            ))} 
             
           

        </main>
    )
}

export default Africa;

