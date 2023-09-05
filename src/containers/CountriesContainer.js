import './CountriesContainer.css';
import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';


const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);
    const [countriesVisited, setCountriesVisited] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
        console.log("loaded data");
    };

    useEffect(() => {
        loadData();
    }, []);



    return (
        <>
            <h1>Country Bucket List</h1>
            <section className='country-lists'>
                <div id='countries'>
                    <h2>Countries:</h2>
                    {countries ? <CountriesList countries={countries} listName="Countries" /> : <p>loading data from API...</p>}
                </div>
                <div id='countries-visited'>
                    <h2>Countries Visited:</h2>
                    <CountriesList countries={countriesVisited} listName="Countries Visited: " />
                </div>
            </section>
        </>
    );
};

export default CountriesContainer;

