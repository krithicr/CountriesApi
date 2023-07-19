import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detailview from './Components/Detailview';
import Header from './Components/Header';
import Homeview from './Components/Homeview';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    try{
      fetchData();
    }
    catch(error){
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
   
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(response.data);

};
  return (
    <div className="App">
      <div className="header">
      <div className="fit_box">
      <Header/>
      </div>
      </div>
      
      <div className="content">
        <div className="fit_box">
      <Routes>
      <Route path='/' element={<Homeview/>} />
      <Route path='/:countryCode' element={<Detailview countryData={countryData}/>}/>
      </Routes>
        </div>
      </div>
      
     
  
    </div>
  );
}

export default App;
