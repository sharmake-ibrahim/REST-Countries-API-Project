import { useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const AmericaFlagDetail = ()=> {
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
        const {id} = useParams();

        console.log("useParms", id);
    
        const countryDetail =  america.find( (detial)=>  detial.area == Number(id));

            console.log(" the clicked country", countryDetail);
       
    return(
       <>
       { <section className="Detail-container">
                <div className="content">
                <button type="button" class="btn btn-success content-btn"> <Link to= "/america">Back</Link></button>
                        <div className="info-div">
                            <div className="img-div">
                                <img src= {countryDetail.flags.png} alt= {countryDetail.flags.alt} />
                            </div>
                                <div className="split">
                                    <div className="info-content">
                                        <div className="text-one">
                                            
                                            <ul className="text-list">
                                            <h1> {countryDetail.name.official}</h1>
                                                <li>Native Name: {countryDetail.name.common}</li>
                                                <li>Population: {countryDetail.population}</li>
                                                <li>Region: {countryDetail.region}</li>
                                                <li>Sub Region: {countryDetail.subregion}</li>
                                                <li>Capital: {countryDetail.capital[0]}</li>
                                            </ul>
                                        </div>
                                        <div className="text-two text-center">
                                        <ul className="text-list">
                                                <li>Top Level Domain: Somalia</li>
                                                <li>Currencies: {`${countryDetail.currencies.MAD}`}</li>
                                                <li>Languages: {`${countryDetail.languages.ara}, ${countryDetail.languages.ber}`}</li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                        <div className="country-border">
                                            <p>Border countries:  </p>
                                            <div className="border">
                                            <span>{countryDetail.borders[0]}</span>
                                            <span>{countryDetail.borders[1]}</span>
                                            <span>{countryDetail.borders[2]}</span>
                                            </div>
                                           
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
         ||<div className="Detail-container"> Country not found</div>}
       
       </>
    )
}
export default AmericaFlagDetail;