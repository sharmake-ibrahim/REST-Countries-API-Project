import React, {useState, useEffect, createContext} from "react";

const dataContext = createContext();




export const DataProvider = ( {children})=> {
    const [africa, setAfrica] = useState([]);


    
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
        <dataContext.Provider value={africa}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;


