import Country from "./Country";

const CountriesList = ({ countries, addCountryToCountriesVisited, checked}) => {

    const mappedCountries = countries.map( (country, index) => {
        return <Country country={country} key={index} addCountryToCountriesVisited={addCountryToCountriesVisited} checked={checked}/>
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