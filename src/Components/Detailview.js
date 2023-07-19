import React from 'react'
import "./Detailview.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Detailview({countryData}) {
    const params = useParams();
    const navigate = useNavigate();

    console.log(countryData);

    let name;
    // let nativeName;
    let flagImg;
    let population;
    let region;
    let subregion;
    let capital;
    let tld;
    let currencies = [];
    // let languages = [];
    let borders = [];
   

    countryData.forEach(country => {
        if(country.cca3 === params.countryCode)
        {
            name = country.name.common
            // nativeName = country.name.nativeName
            flagImg = country.flags.svg
            population = country.population
            region = country.region
            subregion = country.subregion
            capital = country.capital
            tld = country.tld[0]

            for (const currency in country.currencies) {
                
                  const { name } = country.currencies[currency];
                  currencies.push(name);
                
              }
            
            // country.languages.forEach(languages => {
            //     languages.push(languages.name)
            // });

            // for(const language in country.languages){
            //     const {name} = country.languages[language]
            //     languages.push(name)
            //     console.log(name);
            // }
            country.borders?.forEach(border => {
                borders.push(border)
            });
            
        }
        
          
        
    });


    

  
    
  return (
    <div className="detailview">
        <div className="detail_tools">
            <button onClick={()=>navigate(-1)}><KeyboardBackspaceIcon/>Back</button>
        </div>
        <div className="content_detail">
            <div className="left_content">
                <div className="country_flag">
                    <img src={flagImg} alt="" />
                </div>
            </div>
            <div className="right_content">
                <div className="country_name">
                    <h3>{name}</h3>
                    </div>
                <div className="country_details">
                    <div className="left_side">
                        <ul>
                            {/* <li>Native Name: <span className="data">{nativeName}</span></li> */}
                            <li>Population:<span className="data">{population}</span></li>
                            <li>Region: <span className="data">{region}</span></li>
                            <li>Sub-Region: <span className="data">{subregion}</span></li>
                            <li>Capital: <span className="data">{capital}</span></li>
                        </ul>
                    </div>
                    <div className="right_side">
                        <ul>
                            <li>Top Level Domain: <span className="data">{tld}</span></li>
                            <li>Currencies:
                                {/* {currencies.length? (
                                    currencies.map(currency=>(
                                        <span className="data">{currency},</span>
                                    ))
                                ) : (
                                    <span className="data">{currency}</span>
                                )} */}
                                 
                                    {currencies.map((currency, index) => (
                                    <span className='data' key={index}>{currency}</span>
                                    ))}
                               
                                  
                                    
                             </li>
                             {/* <li>
                             {Object.values(countryData.languages).map((language, index) => (
                               <span key={index}>{language}</span>
                             ))}
                            </li> */}
                        </ul>
                      
                    </div>
                    
                   
                </div>
                <div className="lower_values">
                <div className="border">
                    <li>Border Countries:
                    </li> 
                </div>
                <div className="border_data">
                {borders.length? (
                            borders.map(border=>(
                                <span className="border_values">{border}</span>
                            ))
                        ):(
                            <span className="border_values">No Borders</span>
                        )}
                </div>
                </div>
             
                       
                        
                
                
            </div>
        </div>
    </div>
  )
}

export default Detailview