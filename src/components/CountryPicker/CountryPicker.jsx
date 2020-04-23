import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

export default function CountryPicker({handleChange}) {

    const [countries, setCountries] = useState([]);

    const fetchAndSetCountries = async () => {
        setCountries(await fetchCountries());
    }

    useEffect(() => {
        fetchAndSetCountries();
    },[]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleChange(e.target.value)}>
            <option value="">Global</option>
                {countries.map( (country,i) => 
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}
