      import React , {useState, useEffect}from 'react'
      import MainSection from './component/MainSection';
      import { BrowserRouter, Routes, Route } from 'react-router-dom';
      import Error from './component/Error';
      import Layouts from './component/Layouts';
      import Africa from './component/Africa';
      import Asia from './component/Asia';
      import America from "./component/America";
      import Oceania from './component/Oceania';
      import FlagDetail from './component/FlagDetail';
      import AmericaFlagDetail from './component/AmericaFlagDetail';

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
          

          
            {/* <MainSection nations = {countries}/> */}

            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<Layouts/>}>
                              {/* <Route path='' element={<MainSection nations = {countries}/> }/> */}
                             
                              <Route index element={<MainSection nations = {countries}/> }/>
                              <Route path='europe' element={<MainSection nations = {countries}/> }/>
                              <Route path='africa' element= { <Africa/>}/>
                              <Route path='africa/:id' element={<FlagDetail/>}/>
                              <Route path='asia' element= { <Asia/>}/>
                              <Route path='america' element= { <America/>}/>
                              <Route path='america/:id' element= { <AmericaFlagDetail/>}/>
                              <Route path='oceania' element= { <Oceania/>}/>

                              <Route path='*' element={<Error/>}/>
                        </Route>
                        
                  </Routes>
            </BrowserRouter>
            
        
          </>
        )
      }

      export default App;
