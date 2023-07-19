


import React, { useRef } from 'react'
import "./Homeview.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import Countries from './Countries';
import axios from 'axios';

const Homeview = () => {
  
  const [countryData,setCountryData] = useState([])
  const searchInputRef = useRef();

  

  useEffect(()=>{
    try{
      fetchData();
    }
    catch(error){
      console.log(error);
    }
   
 
    },[]);

    const fetchData = async () =>{
    const response =  await axios.get("https://restcountries.com/v3.1/all")
    setCountryData(response.data)
    }
  
    const countrySearch = () =>{
      const searchValue = searchInputRef.current.value

      if(searchValue.trim()){
        const fetchSearch = async () =>{
          const response = await axios.get(`https://restcountries.com/v3.1/name/${searchValue}`)
          setCountryData(response.data)
        }
        try{
          fetchSearch();
        }
        catch(error){
          console.log(error);
        }
      }
      else{
        fetchData();
      }

    


      
    }
  return (
    <div className="homeview">
        <div className="tools">

            <div className="search">
             <span className="search_icon"><SearchIcon/> </span>  
             <input type="text" onChange={countrySearch} placeholder='Search for a country' autoComplete='off' ref={searchInputRef}/>
            </div>

            <div className="filter">
                <select>
                  <option value="">Select By Region</option>
                  <option value="">Africa</option>
                  <option value="">NorthAmerica</option>
                  <option value="">SothAmerica</option>
                  <option value="">Asia</option>
                  <option value="">Europe</option>
                </select>
                
                
            </div>
        </div>
        <div className="countries">
        {countryData.length > 0 ?  (
          countryData.map((country,item)=>{
        return(
         <Countries key={item} country={country}/>
        )
        }) 
    ) : (
      <p>No Countries Found...</p>
    ) }
        
        </div>

        </div>
  )
}

export default Homeview;
