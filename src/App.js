import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export default class App extends Component {

    state = {};

    async componentDidMount(){
        const {confirmed,recovered,deaths,lastUpdate} = await fetchData(); 
        this.setState({confirmed,recovered,deaths,lastUpdate});
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
