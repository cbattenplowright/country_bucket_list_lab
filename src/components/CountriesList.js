import Country from "./Country";

const CountriesList = ({ countries, listName }) => {

    const mappedCountries = countries.map( (country, index) => {
        return <Country country={country} key={index} />
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