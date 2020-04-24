import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchTotalData } from './api';

import coronaImage from './images/image.png';

export default class App extends Component {

    state = {
        country:'',
        data: {}
    };

    async componentDidMount(){
        this.fetchAndSetTD();
    }
    
    fetchAndSetTD = async (country) => { //fetches and sets state with the Total Historical Data
        const data = await fetchTotalData(country);
        this.setState({ data, country: country });
    }

    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} alt='covid-19-logo' src={coronaImage} />
                <Cards data={data}/>
                <CountryPicker fetchAndSetTD={this.fetchAndSetTD} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
