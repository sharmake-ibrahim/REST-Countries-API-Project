import React from "react";
import Card from "./Card";
import "../Scss/Main.scss";

function MainSection(props) {

    console.log("Mainsection data", props)
    return(
        <main>
            <Card/>
         {  
                props.allCountries.map( (country)=> {
                    <Card cardData = {country}/>
                    console.log("for Each Country Data", country);
                })
        

         }
        </main>
    )
}

export default MainSection;