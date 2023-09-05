import Country from "./Country";

const CountriesList = ({ countries, addCountryToCountriesVisited }) => {

    const mappedCountries = countries.map( (country, index) => {
        return <Country country={country} key={index} addCountryToCountriesVisited={addCountryToCountriesVisited}/>
    })

    return (
        <>
            <ul>
                {mappedCountries}
            </ul>
        </>
    );
};

export default CountriesList;