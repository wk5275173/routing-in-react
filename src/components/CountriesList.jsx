


import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
export default function CountriesList({query}) {          

const [countriesData, setCountriesData] = useState([])


useEffect(() =>{                               
  const url = 'https://api.restcountries.com/countries/v5?limit=100'
fetch(url,{
    headers: {
    Authorization: "Bearer rc_live_362e286882894a59b7b7a5e7bb81212d",
  },
})
.then(response => response.json())
.then((data) =>{
setCountriesData(data.data.objects)
})     
}, []) 

  return (
    <>
  <div className="countries-container">{
   countriesData.filter(country => country.flag?.url_svg && country.capitals?.[0]?.name)
   .filter((country) => country.names.common.toLowerCase().includes(query))
   .map((country) =>{
    return (
      <CountryCard
      key={country.names.common}
      name={country.names.common}
      flag={country.flag.url_svg}
      population={country.population.toLocaleString('en-IN')}
      region={country.region}
      capital={country.capitals?.[0]?.name}
      />
    )
   })
  }</div>
  </>
  )
} 