import { Outlet } from "react-router-dom";
import darkIcon from "../design/dark-mode-icon.png";
import lightIcon from "../design/light-mode-icon.png";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
const Layouts =()=> {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=> {
        setIsOpen(!isOpen);
    }
    return (
        <>
          <header>
                    <div className="logo"> <h1> Where in the world?</h1></div>

                    <nav onClick={handleClick}>
                        <div className= {`dark-mode ${ isOpen ? "show" : "hide"}`}>
                            <img src= {darkIcon} alt="dark mode icon" />
                        </div>
                        <div className={`light-mode ${isOpen ? "hide" : "show"}`}>
                            <img src= {lightIcon} alt=" light mode icon" />
                        </div>
                    </nav>
                  
                    
                </header>

                <div className="search-section">

            <div className="searchBar">
                <input type="name"  placeholder="Search for a country…"/>
            </div>
            <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Region
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink className="dropdown-item"  to="europe" >Europe</NavLink>
                        <NavLink className="dropdown-item"  to="africa" >Africa</NavLink>
                        <NavLink className="dropdown-item"  to="asia" >Asia</NavLink>
                        <NavLink className="dropdown-item"  to="america" >America</NavLink>
                        <NavLink className="dropdown-item"  to="oceania" >Oceania</NavLink>
                        
                    </div>
            </div>


</div>

        
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Layouts;