import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

export default class App extends Component {

    state = {
        country:'',
        data: {}
    };

    async componentDidMount(){
        const data = await fetchData(); 
        this.setState({data});
    }

    changeCountry = async (country) => {
        const data = await fetchData(country);
        this.setState({ data, country: country });
    }
    
    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} alt='covid-19 logo' src={coronaImage} />
                <Cards data={data}/>
                <CountryPicker handleChange={this.changeCountry} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
