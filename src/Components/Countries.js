import React from 'react'
import "./Homeview.css"


function Countries({country,item,code,showDetails}) {
    
    const showDetailsHandler = () =>{
      showDetails(code)
    }
  return (
    <div key={item} onClick={showDetailsHandler} className="country">
    <div className="flag">
      <img src={country.flags.svg} alt="flag" />
    </div>
    <div className="home_content">
      <div className="home_title"><h1>{country.name.common}</h1></div> 
      <div className="home_des">
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      {country.capital? (<p>Capital: {country.capital}</p>) : (<p></p>)}
      
      </div> 
    </div>
   </div>
  )
}

export default Countries