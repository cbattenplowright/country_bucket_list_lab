import { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';


const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);

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
            {countries ? <CountriesList countries={countries} /> : <p>loading</p>}
        </>
    );
};

export default CountriesContainer;

