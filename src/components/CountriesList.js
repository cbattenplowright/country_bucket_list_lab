import Country from "./Country";

const CountriesList = ({
    countries,
    addCountryToCountriesVisited,
    addCountryToCountries,
    checked,
}) => {
    const mappedCountries = countries.map((country, index) => {
        return (
            <Country
                country={country}
                key={index}
                addCountryToCountriesVisited={addCountryToCountriesVisited}
                addCountryToCountries={addCountryToCountries}
                checked={checked}
            />
        );
    });

    return (
        <>
            {" "}
            <ul> {mappedCountries}</ul>
        </>
    );
};

export default CountriesList;
