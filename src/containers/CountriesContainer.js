import "./CountriesContainer.css";
import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import FilterForm from "../components/FilterForm";

const CountriesContainer = () => {
    const [countries, setCountries] = useState(null);
    const [countriesVisited, setCountriesVisited] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
        console.log("loaded data");
    };

    useEffect(() => {
        loadData();
    }, []);

    const filterCountries = (countryQuery) => {
        console.log(countryQuery);
        console.log(countries);
        const filteredCountries = countries.filter((country) => {
            return country.name.common
                .toLowerCase()
                .includes(countryQuery.toLowerCase());
        });
        setCountries(filteredCountries);
    };

    const removeCountryFromCountries = (countryName) => {
        const updatedCountries = countries.filter(
            (country) => country.name.common !== countryName
        );
        console.log(updatedCountries);
        setCountries(updatedCountries);
    };

    const addCountryToCountriesVisited = (country) => {
        const updatedCountries = [country, ...countriesVisited];
        setCountriesVisited(updatedCountries);
        removeCountryFromCountries(country.name.common);
    };

    const removeCountryFromCountriesVisited = (countryName) => {
        const updatedCountries = countriesVisited.filter(
            (country) => country.name.common !== countryName
        );
        console.log(updatedCountries);
        setCountriesVisited(updatedCountries);
    };

    const addCountryToCountries = (country) => {
        const updatedCountries = [country, ...countries];
        setCountries(updatedCountries);
        removeCountryFromCountriesVisited(country.name.common);
    };

    return (
        <>
            <h1>Country Bucket List</h1>
            <FilterForm filterCountries={filterCountries} />
            <section className="country-lists">
                <div id="countries">
                    <h2>Countries:</h2>
                    {countries ? (
                        <CountriesList
                            countries={countries}
                            addCountryToCountriesVisited={
                                addCountryToCountriesVisited
                            }
                            checked={false}
                        />
                    ) : (
                        <p>loading data from API...</p>
                    )}
                </div>
                <div id="countries-visited">
                    <h2>Countries Visited:</h2>
                    <CountriesList
                        countries={countriesVisited}
                        checked={true}
                        addCountryToCountries={addCountryToCountries}
                    />
                </div>
            </section>
        </>
    );
};

export default CountriesContainer;
