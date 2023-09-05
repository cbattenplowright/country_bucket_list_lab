import { useState } from 'react';

const Country = ({ country }) => {

    const [checked, setChecked] = useState(false);

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
                    onChange={e => setChecked(e.target.checked)}
                />
            </label>
        </>
    );
};

export default Country;