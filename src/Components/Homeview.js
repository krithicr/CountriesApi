import React, { useRef } from 'react';
import "./Homeview.css";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import Countries from './Countries';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Homeview = () => {
  const [countryData, setCountryData] = useState([]);
  const searchInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

 

  useEffect(() => {
    
      fetchData();
    
    
  }, []);

  const fetchData = async () => {
   
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountryData(response.data);
  
  };

  const countrySearch = () => {
    const searchValue = searchInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        try {
          const response = await axios.get(`https://restcountries.com/v3.1/name/${searchValue}`);
          setCountryData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSearch();
    } else {
      fetchData();
    }
  };


  const regionSearch = () =>{
    const selectedValue = regionRef.current.value;

    if(selectedValue.trim()){
      const fetchRegion = async () =>{
        try{
          const response = await axios.get(`https://restcountries.com/v3.1/region/${selectedValue}`)

       
          setCountryData(response.data)
        }
        catch(error){
          console.log(error);
        }
      }
      fetchRegion();
    }else{
      fetchData();
    }
  }
  
  const showDetails = (code) =>{
    navigate(`/${code}`)
  }


  return (
    <div className="homeview">
      <div className="tools">
        <div className="search">
          <span className="search_icon"><SearchIcon /></span>
          <input type="text" onChange={countrySearch} placeholder='Search for a country' autoComplete='off' ref={searchInputRef} />
        </div>
        <div className="filter">
          <select onChange={regionSearch} ref={regionRef}>
            <option value="">Select By Region</option>
            <option value="Africa">Africa</option>
            <option value="NorthAmerica">North America</option>
            <option value="SouthAmerica">South America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
      </div>
      <div className="countries">

        { countryData.map((country,index) => {
            return <Countries key={index} code={country.cca3} country={country} showDetails={showDetails}/>;
          })  
            
          }
         
       
      </div>
    </div>
  );
};

export default Homeview;