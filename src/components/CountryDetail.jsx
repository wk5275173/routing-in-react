// import React, { useEffect } from 'react'

// export default function CountryDetail() {
//   const countryName = new URLSearchParams(location.search).get("name");
//   // console.log(countryName)

//   useEffect(() =>{
//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1`
//     fetch(url, {
//        headers: {
//     Authorization: "Bearer rc_live_362e286882894a59b7b7a5e7bb81212d",
//   },
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data.objects[0])
//   })
//   })
//   return (
//     <main>
//       <div className="country-details-container">
//           <span href="#" className="Back-button">
//         <i className="fa-solid fa-arrow-left"></i>&nbsp;Back</span>
//         <div className="country-details">
//         <img src="" alt="" />
//           <div className="details-text-container">
//             <h1>Iceland</h1>
//           <div className="details-text">
//             <p><b>Native Name:</b><span className="native-name"></span></p>
//             <p><b>Population: </b><span className="population"></span></p>
//             <p><b>Region: </b><span className="region"></span></p>
//             <p><b>Sub-Region: </b><span className="sub-region"></span></p>
//             <p><b>Capital: </b><span className="capital"></span></p>
//             <p><b>Top Level Domain:</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies:</b><span className="currencies"></span></p>
//             <p><b>Languages:</b><span className="languages"></span></p>
//            </div>
//             <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             </div>
//           </div>
//          </div>
//       </div>
//     </main>
//   )
// }

// import React, { useEffect, useState  } from 'react'

// export default function CountryDetail() {
//   const countryName = new URLSearchParams(location.search).get("name");
//   const [countryData, setCountryData] = useState({})

//   useEffect(() =>{
//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1`
//     fetch(url, {
//        headers: {
//     Authorization: "Bearer rc_live_362e286882894a59b7b7a5e7bb81212d",
//   },
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data.objects[0])
//     setCountryData({                                         //it call and call(infinite call)
//       name: data.data.objects[0].names.common
//     })
//   })
//   })                                                               
//   return (
//     <main>
//       <div className="country-details-container">
//           <span href="#" className="Back-button">
//         <i className="fa-solid fa-arrow-left"></i>&nbsp;Back</span>
//         <div className="country-details">
//         <img src="" alt="" />
//           <div className="details-text-container">
//             <h1>Iceland</h1>
//           <div className="details-text">
//             <p><b>Native Name:</b><span className="native-name"></span></p>
//             <p><b>Population: </b><span className="population"></span></p>
//             <p><b>Region: </b><span className="region"></span></p>
//             <p><b>Sub-Region: </b><span className="sub-region"></span></p>
//             <p><b>Capital: </b><span className="capital"></span></p>
//             <p><b>Top Level Domain:</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies:</b><span className="currencies"></span></p>
//             <p><b>Languages:</b><span className="languages"></span></p>
//            </div>
//             <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             </div>
//           </div>
//          </div>
//       </div>
//     </main>
//   )
// }



// import React, { useEffect, useState } from 'react'

// export default function CountryDetail() {
//   const countryName = new URLSearchParams(location.search).get("name");
//   const [countryData, setCountryData] = useState({})
//   useEffect(() =>{
//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_362e286882894a59b7b7a5e7bb81212d`
//     fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data.objects[0])
//     setCountryData({
//       name: data.data.objects[0].names.common,
//       nativeName: Object.values(data.data.objects[0].names.native)[0].common,
//       population: data.data.objects[0].population,
//       region: data.data.objects[0].region,
//       subRegion: data.data.objects[0].subregion,
//       capital: Object.values(data.data.objects[0].capitals)[0].name,
//       tld: data.data.objects[0].tlds,
//       currency: Object.values(data.data.objects[0].currencies)[0].name,
//       language: Object.values(data.data.objects[0].languages)[0].name
//     })
//   })
//   }, [])
//   return (
//     <main>
//       <div className="country-details-container">
//           <span href="#" className="Back-button">
//         <i className="fa-solid fa-arrow-left"></i>&nbsp;Back</span>
//         <div className="country-details">
//         <img src="" alt="" />
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//           <div className="details-text">
//             <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
//             <p><b>Population: {countryData.population}</b><span className="population"></span></p>
//             <p><b>Region: {countryData.region}</b><span className="region"></span></p>
//             <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
//             <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
//             <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
//             <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
//            </div>
//             <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             </div>
//           </div>
//          </div>
//       </div>
//     </main>
//   )
// }




import React, { useEffect, useState } from 'react'

import './CountryDetail.css'

export default function CountryDetail() {
  const countryName = new URLSearchParams(location.search).get("name");
  const [countryData, setCountryData] = useState(null)
  useEffect(() =>{
  const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_362e286882894a59b7b7a5e7bb81212d`
    fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.objects[0])
    setCountryData({
      name: data.data.objects[0].names.common,
      nativeName: Object.values(data.data.objects[0].names.native)[0].common,
      population: data.data.objects[0].population,
      region: data.data.objects[0].region,
      subRegion: data.data.objects[0].subregion,
      capital: Object.values(data.data.objects[0].capitals)[0].name,
      flag: data.data.objects[0].flag.url_svg,
      tld: data.data.objects[0].tlds,
      currency: Object.values(data.data.objects[0].currencies)[0].name,
      language: Object.values(data.data.objects[0].languages)[0].name
    })
  })
  }, [])
  return (
  countryData === null? 'loading......' : (
    <main>
      <div className="country-details-container">
          <span href="#" className="Back-button">
        <i className="fa-solid fa-arrow-left"></i>&nbsp;Back</span>
        <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name} flag`}/>
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
          <div className="details-text">
            <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
            <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
            <p><b>Region: {countryData.region}</b><span className="region"></span></p>
            <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
            <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
            <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
            <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
            <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
           </div>
            <div className="border-countries">
           <b>Border Countries: &nbsp;</b>
            </div>
          </div>
         </div>
      </div>
    </main>
   )
  )
}