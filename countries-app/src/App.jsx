      import React , {useState, useEffect}from 'react'
      import MainSection from './component/MainSection';


      function App() {

        const [countries, setCountries] = useState([]);
        const api = "https://restcountries.com/v3.1/region/europe ";
        
        const getData = async ()=> {
          const res = await fetch(api);
          const data = await res.json();
          // console.log("This data comes from an Api",data);
          setCountries(data);
        }

          useEffect( ()=> {
            getData()
          },[])

        return (
          <>
          

          
            <MainSection nations = {countries}/>
            
        
          </>
        )
      }

      export default App;
