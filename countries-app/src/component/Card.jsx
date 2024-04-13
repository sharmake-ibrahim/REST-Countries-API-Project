import React from "react";
import "../Scss/Card.scss";

function Card() {

    return(
        <section>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4A6gxU-v-uf3cocUYyIGxMYtjGKzAXkrYuw&s" alt="" />
         
            </div>
            <div className="info">
                <h3 className="name">Somalia</h3>
                <ul>
                    <li>Population: <small> 150000</small></li>
                    <li>Region: <small>Africa</small></li>
                    <li> Capital: <small>Mogadishu</small></li>
                </ul>
            </div>
        </section>
    )
}

export default Card;