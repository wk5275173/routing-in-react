import { Routes, Route, Link } from 'react-router-dom';
import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import './App.css'
import CountryDetail from './components/CountryDetail';


const App = () =>{                             //That's exactly correct! This is how React Router works - the Header component is outside the <Routes> component, so it renders on ALL pages/routes, while the content inside <Routes>//</Routes></Routes> changes based on the current URL.
    const [query, setQuery] = useState('')
    return (                                   //In JSX, {} indicates JavaScript expressions // The inner {} wraps the JSX to tell React "this is a React element, not a string"! // Yes, the curly braces {} are absolutely necessary in JSX when you're passing JavaScript expressions as props ({<h1>Welcome to Countries App</h1>})
        <>
        <Header/>               
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/countries">Countries</Link>
            </nav> */}
        <main>
        <Routes>
         {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
         <Route path="/" element={
        <>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu/>
        </div>
        {
        query === 'unmount'? '' :<CountriesList query={query}/>
        }
        </>
        }/>
        <Route path="/country" element={<CountryDetail/>}/>
        </Routes>
        </main>
        </>
    )
}                                           
export default App



