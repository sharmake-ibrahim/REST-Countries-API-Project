import {useEffect, useState} from "react";
import Card from "./Card";
const Africa = ()=> {
        const [africa, setAfrica] = useState([])
    const getAfricaData = async ()=> {
        try{
            const url = "https://restcountries.com/v3.1/region/africa";
            const res = await fetch(url);
            const data = await res.json();
                    console.log("africa data", data)

            setAfrica(data);
        } 
        catch(error) {
            console.error(error.massage)
        }
        
    }

    useEffect( ()=> {
            getAfricaData()
    },[])
    return(
        <main>

            

            {africa.map( (country)=> (
                <Card africaCountries= {country}/>
            ))}
            

        </main>
    )
}

export default Africa;

