import { useState } from 'react';

const Country = ({ country, addCountryToCountriesVisited }) => {

    const [checked, setChecked] = useState(false);

    const moveCountry = (e) => {
        setChecked(e.target.checked)
        if (!checked) {
            addCountryToCountriesVisited(country)
        }
    }

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
                    value={checked}
                    onChange={e => moveCountry(e)}
                />
            </label>
        </>
    );
};

export default Country;