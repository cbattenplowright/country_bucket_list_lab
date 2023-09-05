import "./FilterForm.css";
import { useState } from "react";

const FilterForm = ({ filterCountries }) => {
    const [countryQuery, setCountryQuery] = useState("");

    const handleChange = (e) => {
        setCountryQuery(e.target.value);
        filterCountries(countryQuery);
    };

    return (
        <>
            <h4>Filter Countries</h4>
            <label form="countryName">
                Type to start filtering...
                <input
                    type="text"
                    name="countryQuery"
                    value={countryQuery}
                    onChange={(e) => handleChange(e)}
                />
            </label>
        </>
    );
};

export default FilterForm;
