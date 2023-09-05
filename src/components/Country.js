import { useState } from "react";

const Country = ({
    country,
    addCountryToCountriesVisited,
    addCountryToCountries,
    checked,
}) => {
    const moveCountry = (e) => {
        if (!checked) {
            addCountryToCountriesVisited(country);
        } else if (checked) {
            console.log("adding to countries");
            addCountryToCountries(country);
        }
    };

    return (
        <>
            <h3>{country.name.common}</h3>
            <p>Capital City: {country.capital}</p>
            <p>Population: {country.population}</p>
            <label>
                Visited:
                <input
                    type="checkbox"
                    name="VisitedCheckbox"
                    checked={checked}
                    onChange={(e) => moveCountry(e)}
                />
            </label>
        </>
    );
};

export default Country;
