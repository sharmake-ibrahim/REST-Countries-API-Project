    import React, { useState } from "react";
    import "../Scss/Main.scss";
    import "../Scss/Card.scss";
   

    function MainSection(props) {
    

    console.log(props.nations);
        
    const nations = props.nations;
        return(

            
            <main>
    

                {
                    nations.map((nation, index)=> (
                        <section key={index}>
                        <div className="img">
                            <img src={nation.flags.png} alt="country flage" />
                     
                        </div>
                        <div className="info">
                            <h3 className="name">{nation.name.common}</h3>
                            <ul>
                                <li>Population: <small> {nation.population}</small></li>
                                <li>Region: <small>{nation.region}</small></li>
                                <li> Capital: <small>{nation.capital[0]}</small></li>
                            </ul>
                        </div>
                    </section>
                    ))
                }
            

            </main>

            
        )
    }

    export default MainSection;