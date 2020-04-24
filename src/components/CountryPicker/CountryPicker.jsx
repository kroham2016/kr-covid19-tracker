import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

export default function CountryPicker({fetchAndSetTD}) {

    const [countries, setCountries] = useState([]);

    const fetchAndSetCountries = async () => { //fetches and sets Local State with the Country List 
        setCountries(await fetchCountries());
    }

    useEffect(() => {
        fetchAndSetCountries();
    },[]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => fetchAndSetTD(e.target.value)}>
                <option value="">Global</option>
                {countries.map( (country,i) => 
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}
